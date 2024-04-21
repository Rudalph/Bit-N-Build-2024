# from flask import Flask, render_template, request
# import openai
# import PyPDF2
# import os

# app = Flask(__name__)

# # Set your OpenAI API key
# openai.api_key = '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'

# def extract_text_from_pdf(pdf_path):
#     with open(pdf_path, 'rb') as file:
#         pdf_reader = PyPDF2.PdfReader(file)
#         text = ''
#         for page_num in range(len(pdf_reader.pages)):
#             page = pdf_reader.pages[page_num]
#             text += page.extract_text()
#         return text

# def ask_openai(question, context):
#     response = openai.Completion.create(
#         engine="gpt-3.5-turbo-instruct",
#         prompt=f"Context: {context}\nQuestion: {question}\nAnswer:",
#         temperature=0.7,
#         max_tokens=150,
#     )
#     return response['choices'][0]['text'].strip()

# # Store the generated content for each resume
# resume_contents = []

# @app.route('/', methods=['GET', 'POST'])
# def index():
#     global resume_contents
#     if request.method == 'POST':
#         # Handle file upload
#         resume_files = request.files.getlist('resumes')

#         answers = []

#         for resume_file in resume_files:
#             if resume_file:
#                 # Create the "uploads" directory if it doesn't exist
#                 if not os.path.exists('uploads'):
#                     os.makedirs('uploads')

#                 # Save the uploaded file
#                 resume_path = os.path.join('uploads', resume_file.filename)
#                 resume_file.save(resume_path)

#                 # Extract text from the resume PDF
#                 resume_text = extract_text_from_pdf(resume_path)

#                 # Ask a question using OpenAI API
#                 question = "What is the name, email, skills, certifications, qualifications, experience? Make a separate list of all these attributes. Answers in words."
#                 answer = ask_openai(question, resume_text)
#                 answers.append(answer)

#                 # Store the generated content for each resume
#                 resume_contents.append(resume_text)

#         return render_template('index.html', answer=answers)

#     return render_template('index.html', answer=None)

# @app.route('/job_description', methods=['GET', 'POST'])
# def job_description():
#     global resume_contents
#     if request.method == 'POST':
#         # Get the job description input
#         job_description = request.form['job_description']

#         # Ask OpenAI for the most suitable resume for the given job description
#         context = "\n".join(resume_contents)
#         question = f"Which resume is most suitable for the following job description:\n{job_description}"
#         result = ask_openai(question, context)

#         return render_template('job_description.html', result=result)

#     return render_template('job_description.html', result=None)

# if __name__ == '__main__':
#     app.run(debug=True)






from flask import Flask, render_template, request
import openai
import PyPDF2
import os

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = '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'

def extract_text_from_pdf(pdf_path):
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        text = ''
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            text += page.extract_text()
        return text

def ask_openai(question, context):
    response = openai.Completion.create(
        engine="gpt-3.5-turbo-instruct",
        prompt=f"Context: {context}\nQuestion: {question}\nAnswer:",
        temperature=0.7,
        max_tokens=150,
    )
    return response['choices'][0]['text'].strip()

# Store the generated content for each resume
resume_contents = []

@app.route('/', methods=['GET', 'POST'])
def index():
    global resume_contents
    if request.method == 'POST':
        # Handle file upload
        resume_files = request.files.getlist('resumes')

        answers = []

        for resume_file in resume_files:
            if resume_file:
                # Create the "uploads" directory if it doesn't exist
                if not os.path.exists('uploads'):
                    os.makedirs('uploads')

                # Save the uploaded file
                resume_path = os.path.join('uploads', resume_file.filename)
                resume_file.save(resume_path)

                # Extract text from the resume PDF
                resume_text = extract_text_from_pdf(resume_path)

                # Ask a question using OpenAI API
                question = "What is the name, email, skills, certifications, qualifications, experience? Make a separate list of all these attributes."
                answer = ask_openai(question, resume_text)

                # Parse the answer into a dictionary
                answer_dict = {}
                lines = answer.split('\n')
                for line in lines:
                    if ':' in line:
                        key, value = line.split(':', 1)
                        answer_dict[key.strip().lower()] = value.strip()

                answers.append(answer_dict)

                # Store the generated content for each resume
                resume_contents.append({'resume': resume_text, 'category': None})

        return render_template('index.html', answer=answers)

    return render_template('index.html', answer=None)

@app.route('/job_description', methods=['GET', 'POST'])
def job_description():
    global resume_contents
    if request.method == 'POST':
        # Get the job description input
        job_description = request.form['job_description']

        # Concatenate all resumes for the context
        context = "\n".join(resume['resume'] for resume in resume_contents)

        # Ask OpenAI for the most suitable resume for the given job description
        question = f"Which resume is most suitable for the following job description:\n{job_description}"
        result = ask_openai(question, context)

        return render_template('job_description.html', result=result)

    return render_template('job_description.html', result=None)

@app.route('/job_description1', methods=['GET', 'POST'])
def job_description1():
    global resume_contents
    if request.method == 'POST':
        # Get the job description input for categorization
        job_description = request.form['job_description']

        if not resume_contents:
            # If there are no resumes, return an appropriate response
            return render_template('categorize_resumes.html', resume_contents=None)

        # Extract all resume texts
        all_resumes = [resume_content['resume'] for resume_content in resume_contents]

        # Concatenate all resumes for the context
        context = "\n".join(all_resumes)

        # Ask OpenAI to categorize all resumes based on the job description
        question = f"Categorize the resumes into three categories: Excellent, Good, No Match based on the job description:\n{job_description}"
        response = ask_openai(question, context)

        # Split the response into categories for each resume
        categories = response.strip().split('\n')

        # Assign categories to each resume in resume_contents
        for i, category in enumerate(categories):
            if i < len(resume_contents):
                resume_contents[i]['category'] = category

        return render_template('categorize_resumes.html', resume_contents=resume_contents)

    return render_template('categorize_resumes.html', resume_contents=None)



if __name__ == '__main__':
    app.run(debug=True)




# from flask import Flask, render_template, request
# import openai
# import PyPDF2
# import os

# app = Flask(__name__)

# # Set your OpenAI API key
# openai.api_key = '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'

# def extract_text_from_pdf(pdf_path):
#     with open(pdf_path, 'rb') as file:
#         pdf_reader = PyPDF2.PdfReader(file)
#         text = ''
#         for page_num in range(len(pdf_reader.pages)):
#             page = pdf_reader.pages[page_num]
#             text += page.extract_text()
#         return text

# def ask_openai(question, context):
#     response = openai.Completion.create(
#         engine="gpt-3.5-turbo-instruct",
#         prompt=f"Context: {context}\nQuestion: {question}\nAnswer:",
#         temperature=0.7,
#         max_tokens=150,
#     )
#     return response['choices'][0]['text'].strip()

# # Store the generated content for each resume
# resume_contents = []

# @app.route('/', methods=['GET', 'POST'])
# def index():
#     global resume_contents
#     if request.method == 'POST':
#         # Handle file upload
#         resume_files = request.files.getlist('resumes')

#         answers = []

#         for resume_file in resume_files:
#             if resume_file:
#                 # Create the "uploads" directory if it doesn't exist
#                 if not os.path.exists('uploads'):
#                     os.makedirs('uploads')

#                 # Save the uploaded file
#                 resume_path = os.path.join('uploads', resume_file.filename)
#                 resume_file.save(resume_path)

#                 # Extract text from the resume PDF
#                 resume_text = extract_text_from_pdf(resume_path)

#                 # Ask a question using OpenAI API
#                 question = "What is the name, email, skills, certifications, qualifications, experience? Make a separate list of all these attributes."
#                 answer = ask_openai(question, resume_text)

#                 # Parse the answer into a dictionary
#                 answer_dict = {}
#                 lines = answer.split('\n')
#                 for line in lines:
#                     if ':' in line:
#                         key, value = line.split(':', 1)
#                         answer_dict[key.strip().lower()] = value.strip()

#                 answers.append(answer_dict)

#                 # Store the generated content for each resume
#                 resume_contents.append({'resume': resume_text, 'category': None})

#         return render_template('index.html', answer=answers)

#     return render_template('index.html', answer=None)

# @app.route('/job_description', methods=['GET', 'POST'])
# def job_description():
#     global resume_contents
#     if request.method == 'POST':
#         # Get the job description input
#         job_description = request.form['job_description']

#         # Ask OpenAI for the most suitable resume for the given job description
#         context = "\n".join(resume_contents)
#         question = f"Which resume is most suitable for the following job description:\n{job_description}"
#         result = ask_openai(question, context)

#         return render_template('job_description.html', result=result)

#     return render_template('job_description.html', result=None)

# @app.route('/categorize_resumes', methods=['GET', 'POST'])
# def categorize_resumes():
#     global resume_contents
#     if request.method == 'POST':
#         # Categorize resumes based on their content
#         for i, resume_content in enumerate(resume_contents):
#             question = "Categorize the resume into three categories: Excellent, Good, No Match based on the content."
#             category = ask_openai(question, resume_content['resume'])
#             resume_contents[i]['category'] = category

#         return render_template('categorize_resumes.html', resume_contents=resume_contents)

#     return render_template('categorize_resumes.html', resume_contents=None)

# if __name__ == '__main__':
#     app.run(debug=True)











# shruti update
#Rudalph Update