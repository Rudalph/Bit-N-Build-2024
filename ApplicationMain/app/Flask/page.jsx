// pages/FlaskApp.js
import React from 'react';

const page = () => {
  return (
    <div>
      <h1>Next.js App</h1>
      <iframe
        src="http://localhost:5000"
        width="100%"
        height="600px"
        title="Flask App"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default page;
