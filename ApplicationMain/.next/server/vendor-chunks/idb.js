"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/idb";
exports.ids = ["vendor-chunks/idb"];
exports.modules = {

/***/ "(ssr)/./node_modules/idb/build/index.js":
/*!*****************************************!*\
  !*** ./node_modules/idb/build/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteDB: () => (/* binding */ deleteDB),\n/* harmony export */   openDB: () => (/* binding */ openDB),\n/* harmony export */   unwrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),\n/* harmony export */   wrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)\n/* harmony export */ });\n/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ \"(ssr)/./node_modules/idb/build/wrap-idb-value.js\");\n\n\n/**\n * Open a database.\n *\n * @param name Name of the database.\n * @param version Schema version.\n * @param callbacks Additional callbacks.\n */ function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {\n    const request = indexedDB.open(name, version);\n    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);\n    if (upgrade) {\n        request.addEventListener(\"upgradeneeded\", (event)=>{\n            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction), event);\n        });\n    }\n    if (blocked) {\n        request.addEventListener(\"blocked\", (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405\n            event.oldVersion, event.newVersion, event));\n    }\n    openPromise.then((db)=>{\n        if (terminated) db.addEventListener(\"close\", ()=>terminated());\n        if (blocking) {\n            db.addEventListener(\"versionchange\", (event)=>blocking(event.oldVersion, event.newVersion, event));\n        }\n    }).catch(()=>{});\n    return openPromise;\n}\n/**\n * Delete a database.\n *\n * @param name Name of the database.\n */ function deleteDB(name, { blocked } = {}) {\n    const request = indexedDB.deleteDatabase(name);\n    if (blocked) {\n        request.addEventListener(\"blocked\", (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405\n            event.oldVersion, event));\n    }\n    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(()=>undefined);\n}\nconst readMethods = [\n    \"get\",\n    \"getKey\",\n    \"getAll\",\n    \"getAllKeys\",\n    \"count\"\n];\nconst writeMethods = [\n    \"put\",\n    \"add\",\n    \"delete\",\n    \"clear\"\n];\nconst cachedMethods = new Map();\nfunction getMethod(target, prop) {\n    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === \"string\")) {\n        return;\n    }\n    if (cachedMethods.get(prop)) return cachedMethods.get(prop);\n    const targetFuncName = prop.replace(/FromIndex$/, \"\");\n    const useIndex = prop !== targetFuncName;\n    const isWrite = writeMethods.includes(targetFuncName);\n    if (// Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.\n    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {\n        return;\n    }\n    const method = async function(storeName, ...args) {\n        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(\n        const tx = this.transaction(storeName, isWrite ? \"readwrite\" : \"readonly\");\n        let target = tx.store;\n        if (useIndex) target = target.index(args.shift());\n        // Must reject if op rejects.\n        // If it's a write operation, must reject if tx.done rejects.\n        // Must reject with op rejection first.\n        // Must resolve with op value.\n        // Must handle both promises (no unhandled rejections)\n        return (await Promise.all([\n            target[targetFuncName](...args),\n            isWrite && tx.done\n        ]))[0];\n    };\n    cachedMethods.set(prop, method);\n    return method;\n}\n(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps)=>({\n        ...oldTraps,\n        get: (target, prop, receiver)=>getMethod(target, prop) || oldTraps.get(target, prop, receiver),\n        has: (target, prop)=>!!getMethod(target, prop) || oldTraps.has(target, prop)\n    }));\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1FO0FBQ047QUFFN0Q7Ozs7OztDQU1DLEdBQ0QsU0FBU00sT0FBT0MsSUFBSSxFQUFFQyxPQUFPLEVBQUUsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFFLE1BQU1DLFVBQVVDLFVBQVVDLElBQUksQ0FBQ1IsTUFBTUM7SUFDckMsTUFBTVEsY0FBY2YscURBQUlBLENBQUNZO0lBQ3pCLElBQUlILFNBQVM7UUFDVEcsUUFBUUksZ0JBQWdCLENBQUMsaUJBQWlCLENBQUNDO1lBQ3ZDUixRQUFRVCxxREFBSUEsQ0FBQ1ksUUFBUU0sTUFBTSxHQUFHRCxNQUFNRSxVQUFVLEVBQUVGLE1BQU1HLFVBQVUsRUFBRXBCLHFEQUFJQSxDQUFDWSxRQUFRUyxXQUFXLEdBQUdKO1FBQ2pHO0lBQ0o7SUFDQSxJQUFJVCxTQUFTO1FBQ1RJLFFBQVFJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQ0MsUUFBVVQsUUFDL0MscUZBQXFGO1lBQ3JGUyxNQUFNRSxVQUFVLEVBQUVGLE1BQU1HLFVBQVUsRUFBRUg7SUFDeEM7SUFDQUYsWUFDS08sSUFBSSxDQUFDLENBQUNDO1FBQ1AsSUFBSVosWUFDQVksR0FBR1AsZ0JBQWdCLENBQUMsU0FBUyxJQUFNTDtRQUN2QyxJQUFJRCxVQUFVO1lBQ1ZhLEdBQUdQLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDQyxRQUFVUCxTQUFTTyxNQUFNRSxVQUFVLEVBQUVGLE1BQU1HLFVBQVUsRUFBRUg7UUFDakc7SUFDSixHQUNLTyxLQUFLLENBQUMsS0FBUTtJQUNuQixPQUFPVDtBQUNYO0FBQ0E7Ozs7Q0FJQyxHQUNELFNBQVNVLFNBQVNuQixJQUFJLEVBQUUsRUFBRUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLE1BQU1JLFVBQVVDLFVBQVVhLGNBQWMsQ0FBQ3BCO0lBQ3pDLElBQUlFLFNBQVM7UUFDVEksUUFBUUksZ0JBQWdCLENBQUMsV0FBVyxDQUFDQyxRQUFVVCxRQUMvQyxxRkFBcUY7WUFDckZTLE1BQU1FLFVBQVUsRUFBRUY7SUFDdEI7SUFDQSxPQUFPakIscURBQUlBLENBQUNZLFNBQVNVLElBQUksQ0FBQyxJQUFNSztBQUNwQztBQUVBLE1BQU1DLGNBQWM7SUFBQztJQUFPO0lBQVU7SUFBVTtJQUFjO0NBQVE7QUFDdEUsTUFBTUMsZUFBZTtJQUFDO0lBQU87SUFBTztJQUFVO0NBQVE7QUFDdEQsTUFBTUMsZ0JBQWdCLElBQUlDO0FBQzFCLFNBQVNDLFVBQVVDLE1BQU0sRUFBRUMsSUFBSTtJQUMzQixJQUFJLENBQUVELENBQUFBLGtCQUFrQkUsZUFDcEIsQ0FBRUQsQ0FBQUEsUUFBUUQsTUFBSyxLQUNmLE9BQU9DLFNBQVMsUUFBTyxHQUFJO1FBQzNCO0lBQ0o7SUFDQSxJQUFJSixjQUFjTSxHQUFHLENBQUNGLE9BQ2xCLE9BQU9KLGNBQWNNLEdBQUcsQ0FBQ0Y7SUFDN0IsTUFBTUcsaUJBQWlCSCxLQUFLSSxPQUFPLENBQUMsY0FBYztJQUNsRCxNQUFNQyxXQUFXTCxTQUFTRztJQUMxQixNQUFNRyxVQUFVWCxhQUFhWSxRQUFRLENBQUNKO0lBQ3RDLElBQ0EsNEVBQTRFO0lBQzVFLENBQUVBLENBQUFBLGtCQUFrQixDQUFDRSxXQUFXRyxXQUFXQyxjQUFhLEVBQUdDLFNBQVMsS0FDaEUsQ0FBRUosQ0FBQUEsV0FBV1osWUFBWWEsUUFBUSxDQUFDSixlQUFjLEdBQUk7UUFDcEQ7SUFDSjtJQUNBLE1BQU1RLFNBQVMsZUFBZ0JDLFNBQVMsRUFBRSxHQUFHQyxJQUFJO1FBQzdDLHdFQUF3RTtRQUN4RSxNQUFNQyxLQUFLLElBQUksQ0FBQzNCLFdBQVcsQ0FBQ3lCLFdBQVdOLFVBQVUsY0FBYztRQUMvRCxJQUFJUCxTQUFTZSxHQUFHQyxLQUFLO1FBQ3JCLElBQUlWLFVBQ0FOLFNBQVNBLE9BQU9pQixLQUFLLENBQUNILEtBQUtJLEtBQUs7UUFDcEMsNkJBQTZCO1FBQzdCLDZEQUE2RDtRQUM3RCx1Q0FBdUM7UUFDdkMsOEJBQThCO1FBQzlCLHNEQUFzRDtRQUN0RCxPQUFPLENBQUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDO1lBQ3RCcEIsTUFBTSxDQUFDSSxlQUFlLElBQUlVO1lBQzFCUCxXQUFXUSxHQUFHTSxJQUFJO1NBQ3JCLEVBQUUsQ0FBQyxFQUFFO0lBQ1Y7SUFDQXhCLGNBQWN5QixHQUFHLENBQUNyQixNQUFNVztJQUN4QixPQUFPQTtBQUNYO0FBQ0EzQyxxREFBWUEsQ0FBQyxDQUFDc0QsV0FBYztRQUN4QixHQUFHQSxRQUFRO1FBQ1hwQixLQUFLLENBQUNILFFBQVFDLE1BQU11QixXQUFhekIsVUFBVUMsUUFBUUMsU0FBU3NCLFNBQVNwQixHQUFHLENBQUNILFFBQVFDLE1BQU11QjtRQUN2RkMsS0FBSyxDQUFDekIsUUFBUUMsT0FBUyxDQUFDLENBQUNGLFVBQVVDLFFBQVFDLFNBQVNzQixTQUFTRSxHQUFHLENBQUN6QixRQUFRQztJQUM3RTtBQUU0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JuYi8uL25vZGVfbW9kdWxlcy9pZGIvYnVpbGQvaW5kZXguanM/OTEzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3IGFzIHdyYXAsIHIgYXMgcmVwbGFjZVRyYXBzIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5leHBvcnQgeyB1IGFzIHVud3JhcCwgdyBhcyB3cmFwIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5cbi8qKlxuICogT3BlbiBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICogQHBhcmFtIHZlcnNpb24gU2NoZW1hIHZlcnNpb24uXG4gKiBAcGFyYW0gY2FsbGJhY2tzIEFkZGl0aW9uYWwgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBvcGVuREIobmFtZSwgdmVyc2lvbiwgeyBibG9ja2VkLCB1cGdyYWRlLCBibG9ja2luZywgdGVybWluYXRlZCB9ID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4obmFtZSwgdmVyc2lvbik7XG4gICAgY29uc3Qgb3BlblByb21pc2UgPSB3cmFwKHJlcXVlc3QpO1xuICAgIGlmICh1cGdyYWRlKSB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBncmFkZW5lZWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdXBncmFkZSh3cmFwKHJlcXVlc3QucmVzdWx0KSwgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgd3JhcChyZXF1ZXN0LnRyYW5zYWN0aW9uKSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIG9wZW5Qcm9taXNlXG4gICAgICAgIC50aGVuKChkYikgPT4ge1xuICAgICAgICBpZiAodGVybWluYXRlZClcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4gdGVybWluYXRlZCgpKTtcbiAgICAgICAgaWYgKGJsb2NraW5nKSB7XG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCd2ZXJzaW9uY2hhbmdlJywgKGV2ZW50KSA9PiBibG9ja2luZyhldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCBldmVudCkpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgcmV0dXJuIG9wZW5Qcm9taXNlO1xufVxuLyoqXG4gKiBEZWxldGUgYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqL1xuZnVuY3Rpb24gZGVsZXRlREIobmFtZSwgeyBibG9ja2VkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UobmFtZSk7XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIHJldHVybiB3cmFwKHJlcXVlc3QpLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcbn1cblxuY29uc3QgcmVhZE1ldGhvZHMgPSBbJ2dldCcsICdnZXRLZXknLCAnZ2V0QWxsJywgJ2dldEFsbEtleXMnLCAnY291bnQnXTtcbmNvbnN0IHdyaXRlTWV0aG9kcyA9IFsncHV0JywgJ2FkZCcsICdkZWxldGUnLCAnY2xlYXInXTtcbmNvbnN0IGNhY2hlZE1ldGhvZHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB7XG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSURCRGF0YWJhc2UgJiZcbiAgICAgICAgIShwcm9wIGluIHRhcmdldCkgJiZcbiAgICAgICAgdHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYWNoZWRNZXRob2RzLmdldChwcm9wKSlcbiAgICAgICAgcmV0dXJuIGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApO1xuICAgIGNvbnN0IHRhcmdldEZ1bmNOYW1lID0gcHJvcC5yZXBsYWNlKC9Gcm9tSW5kZXgkLywgJycpO1xuICAgIGNvbnN0IHVzZUluZGV4ID0gcHJvcCAhPT0gdGFyZ2V0RnVuY05hbWU7XG4gICAgY29uc3QgaXNXcml0ZSA9IHdyaXRlTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSk7XG4gICAgaWYgKFxuICAgIC8vIEJhaWwgaWYgdGhlIHRhcmdldCBkb2Vzbid0IGV4aXN0IG9uIHRoZSB0YXJnZXQuIEVnLCBnZXRBbGwgaXNuJ3QgaW4gRWRnZS5cbiAgICAhKHRhcmdldEZ1bmNOYW1lIGluICh1c2VJbmRleCA/IElEQkluZGV4IDogSURCT2JqZWN0U3RvcmUpLnByb3RvdHlwZSkgfHxcbiAgICAgICAgIShpc1dyaXRlIHx8IHJlYWRNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2QgPSBhc3luYyBmdW5jdGlvbiAoc3RvcmVOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIC8vIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6IHVuZGVmaW5lZCBnemlwcHMgYmV0dGVyLCBidXQgZmFpbHMgaW4gRWRnZSA6KFxuICAgICAgICBjb25zdCB0eCA9IHRoaXMudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiAncmVhZG9ubHknKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IHR4LnN0b3JlO1xuICAgICAgICBpZiAodXNlSW5kZXgpXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQuaW5kZXgoYXJncy5zaGlmdCgpKTtcbiAgICAgICAgLy8gTXVzdCByZWplY3QgaWYgb3AgcmVqZWN0cy5cbiAgICAgICAgLy8gSWYgaXQncyBhIHdyaXRlIG9wZXJhdGlvbiwgbXVzdCByZWplY3QgaWYgdHguZG9uZSByZWplY3RzLlxuICAgICAgICAvLyBNdXN0IHJlamVjdCB3aXRoIG9wIHJlamVjdGlvbiBmaXJzdC5cbiAgICAgICAgLy8gTXVzdCByZXNvbHZlIHdpdGggb3AgdmFsdWUuXG4gICAgICAgIC8vIE11c3QgaGFuZGxlIGJvdGggcHJvbWlzZXMgKG5vIHVuaGFuZGxlZCByZWplY3Rpb25zKVxuICAgICAgICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRhcmdldFt0YXJnZXRGdW5jTmFtZV0oLi4uYXJncyksXG4gICAgICAgICAgICBpc1dyaXRlICYmIHR4LmRvbmUsXG4gICAgICAgIF0pKVswXTtcbiAgICB9O1xuICAgIGNhY2hlZE1ldGhvZHMuc2V0KHByb3AsIG1ldGhvZCk7XG4gICAgcmV0dXJuIG1ldGhvZDtcbn1cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gICAgLi4ub2xkVHJhcHMsXG4gICAgZ2V0OiAodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikgPT4gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpLFxuICAgIGhhczogKHRhcmdldCwgcHJvcCkgPT4gISFnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5oYXModGFyZ2V0LCBwcm9wKSxcbn0pKTtcblxuZXhwb3J0IHsgZGVsZXRlREIsIG9wZW5EQiB9O1xuIl0sIm5hbWVzIjpbInciLCJ3cmFwIiwiciIsInJlcGxhY2VUcmFwcyIsInUiLCJ1bndyYXAiLCJvcGVuREIiLCJuYW1lIiwidmVyc2lvbiIsImJsb2NrZWQiLCJ1cGdyYWRlIiwiYmxvY2tpbmciLCJ0ZXJtaW5hdGVkIiwicmVxdWVzdCIsImluZGV4ZWREQiIsIm9wZW4iLCJvcGVuUHJvbWlzZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInJlc3VsdCIsIm9sZFZlcnNpb24iLCJuZXdWZXJzaW9uIiwidHJhbnNhY3Rpb24iLCJ0aGVuIiwiZGIiLCJjYXRjaCIsImRlbGV0ZURCIiwiZGVsZXRlRGF0YWJhc2UiLCJ1bmRlZmluZWQiLCJyZWFkTWV0aG9kcyIsIndyaXRlTWV0aG9kcyIsImNhY2hlZE1ldGhvZHMiLCJNYXAiLCJnZXRNZXRob2QiLCJ0YXJnZXQiLCJwcm9wIiwiSURCRGF0YWJhc2UiLCJnZXQiLCJ0YXJnZXRGdW5jTmFtZSIsInJlcGxhY2UiLCJ1c2VJbmRleCIsImlzV3JpdGUiLCJpbmNsdWRlcyIsIklEQkluZGV4IiwiSURCT2JqZWN0U3RvcmUiLCJwcm90b3R5cGUiLCJtZXRob2QiLCJzdG9yZU5hbWUiLCJhcmdzIiwidHgiLCJzdG9yZSIsImluZGV4Iiwic2hpZnQiLCJQcm9taXNlIiwiYWxsIiwiZG9uZSIsInNldCIsIm9sZFRyYXBzIiwicmVjZWl2ZXIiLCJoYXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/idb/build/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/idb/build/wrap-idb-value.js":
/*!**************************************************!*\
  !*** ./node_modules/idb/build/wrap-idb-value.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   a: () => (/* binding */ reverseTransformCache),\n/* harmony export */   i: () => (/* binding */ instanceOfAny),\n/* harmony export */   r: () => (/* binding */ replaceTraps),\n/* harmony export */   u: () => (/* binding */ unwrap),\n/* harmony export */   w: () => (/* binding */ wrap)\n/* harmony export */ });\nconst instanceOfAny = (object, constructors)=>constructors.some((c)=>object instanceof c);\nlet idbProxyableTypes;\nlet cursorAdvanceMethods;\n// This is a function to prevent it throwing up in node environments.\nfunction getIdbProxyableTypes() {\n    return idbProxyableTypes || (idbProxyableTypes = [\n        IDBDatabase,\n        IDBObjectStore,\n        IDBIndex,\n        IDBCursor,\n        IDBTransaction\n    ]);\n}\n// This is a function to prevent it throwing up in node environments.\nfunction getCursorAdvanceMethods() {\n    return cursorAdvanceMethods || (cursorAdvanceMethods = [\n        IDBCursor.prototype.advance,\n        IDBCursor.prototype.continue,\n        IDBCursor.prototype.continuePrimaryKey\n    ]);\n}\nconst cursorRequestMap = new WeakMap();\nconst transactionDoneMap = new WeakMap();\nconst transactionStoreNamesMap = new WeakMap();\nconst transformCache = new WeakMap();\nconst reverseTransformCache = new WeakMap();\nfunction promisifyRequest(request) {\n    const promise = new Promise((resolve, reject)=>{\n        const unlisten = ()=>{\n            request.removeEventListener(\"success\", success);\n            request.removeEventListener(\"error\", error);\n        };\n        const success = ()=>{\n            resolve(wrap(request.result));\n            unlisten();\n        };\n        const error = ()=>{\n            reject(request.error);\n            unlisten();\n        };\n        request.addEventListener(\"success\", success);\n        request.addEventListener(\"error\", error);\n    });\n    promise.then((value)=>{\n        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval\n        // (see wrapFunction).\n        if (value instanceof IDBCursor) {\n            cursorRequestMap.set(value, request);\n        }\n    // Catching to avoid \"Uncaught Promise exceptions\"\n    }).catch(()=>{});\n    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This\n    // is because we create many promises from a single IDBRequest.\n    reverseTransformCache.set(promise, request);\n    return promise;\n}\nfunction cacheDonePromiseForTransaction(tx) {\n    // Early bail if we've already created a done promise for this transaction.\n    if (transactionDoneMap.has(tx)) return;\n    const done = new Promise((resolve, reject)=>{\n        const unlisten = ()=>{\n            tx.removeEventListener(\"complete\", complete);\n            tx.removeEventListener(\"error\", error);\n            tx.removeEventListener(\"abort\", error);\n        };\n        const complete = ()=>{\n            resolve();\n            unlisten();\n        };\n        const error = ()=>{\n            reject(tx.error || new DOMException(\"AbortError\", \"AbortError\"));\n            unlisten();\n        };\n        tx.addEventListener(\"complete\", complete);\n        tx.addEventListener(\"error\", error);\n        tx.addEventListener(\"abort\", error);\n    });\n    // Cache it for later retrieval.\n    transactionDoneMap.set(tx, done);\n}\nlet idbProxyTraps = {\n    get (target, prop, receiver) {\n        if (target instanceof IDBTransaction) {\n            // Special handling for transaction.done.\n            if (prop === \"done\") return transactionDoneMap.get(target);\n            // Polyfill for objectStoreNames because of Edge.\n            if (prop === \"objectStoreNames\") {\n                return target.objectStoreNames || transactionStoreNamesMap.get(target);\n            }\n            // Make tx.store return the only store in the transaction, or undefined if there are many.\n            if (prop === \"store\") {\n                return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);\n            }\n        }\n        // Else transform whatever we get back.\n        return wrap(target[prop]);\n    },\n    set (target, prop, value) {\n        target[prop] = value;\n        return true;\n    },\n    has (target, prop) {\n        if (target instanceof IDBTransaction && (prop === \"done\" || prop === \"store\")) {\n            return true;\n        }\n        return prop in target;\n    }\n};\nfunction replaceTraps(callback) {\n    idbProxyTraps = callback(idbProxyTraps);\n}\nfunction wrapFunction(func) {\n    // Due to expected object equality (which is enforced by the caching in `wrap`), we\n    // only create one new func per func.\n    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.\n    if (func === IDBDatabase.prototype.transaction && !(\"objectStoreNames\" in IDBTransaction.prototype)) {\n        return function(storeNames, ...args) {\n            const tx = func.call(unwrap(this), storeNames, ...args);\n            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [\n                storeNames\n            ]);\n            return wrap(tx);\n        };\n    }\n    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In\n    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the\n    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense\n    // with real promises, so each advance methods returns a new promise for the cursor object, or\n    // undefined if the end of the cursor has been reached.\n    if (getCursorAdvanceMethods().includes(func)) {\n        return function(...args) {\n            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use\n            // the original object.\n            func.apply(unwrap(this), args);\n            return wrap(cursorRequestMap.get(this));\n        };\n    }\n    return function(...args) {\n        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use\n        // the original object.\n        return wrap(func.apply(unwrap(this), args));\n    };\n}\nfunction transformCachableValue(value) {\n    if (typeof value === \"function\") return wrapFunction(value);\n    // This doesn't return, it just creates a 'done' promise for the transaction,\n    // which is later returned for transaction.done (see idbObjectHandler).\n    if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);\n    if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);\n    // Return the same value back if we're not going to transform it.\n    return value;\n}\nfunction wrap(value) {\n    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because\n    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.\n    if (value instanceof IDBRequest) return promisifyRequest(value);\n    // If we've already transformed this value before, reuse the transformed value.\n    // This is faster, but it also provides object equality.\n    if (transformCache.has(value)) return transformCache.get(value);\n    const newValue = transformCachableValue(value);\n    // Not all types are transformed.\n    // These may be primitive types, so they can't be WeakMap keys.\n    if (newValue !== value) {\n        transformCache.set(value, newValue);\n        reverseTransformCache.set(newValue, value);\n    }\n    return newValue;\n}\nconst unwrap = (value)=>reverseTransformCache.get(value);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL3dyYXAtaWRiLXZhbHVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTUEsZ0JBQWdCLENBQUNDLFFBQVFDLGVBQWlCQSxhQUFhQyxJQUFJLENBQUMsQ0FBQ0MsSUFBTUgsa0JBQWtCRztBQUUzRixJQUFJQztBQUNKLElBQUlDO0FBQ0oscUVBQXFFO0FBQ3JFLFNBQVNDO0lBQ0wsT0FBUUYscUJBQ0hBLENBQUFBLG9CQUFvQjtRQUNqQkc7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7S0FDSDtBQUNUO0FBQ0EscUVBQXFFO0FBQ3JFLFNBQVNDO0lBQ0wsT0FBUVAsd0JBQ0hBLENBQUFBLHVCQUF1QjtRQUNwQkssVUFBVUcsU0FBUyxDQUFDQyxPQUFPO1FBQzNCSixVQUFVRyxTQUFTLENBQUNFLFFBQVE7UUFDNUJMLFVBQVVHLFNBQVMsQ0FBQ0csa0JBQWtCO0tBQ3pDO0FBQ1Q7QUFDQSxNQUFNQyxtQkFBbUIsSUFBSUM7QUFDN0IsTUFBTUMscUJBQXFCLElBQUlEO0FBQy9CLE1BQU1FLDJCQUEyQixJQUFJRjtBQUNyQyxNQUFNRyxpQkFBaUIsSUFBSUg7QUFDM0IsTUFBTUksd0JBQXdCLElBQUlKO0FBQ2xDLFNBQVNLLGlCQUFpQkMsT0FBTztJQUM3QixNQUFNQyxVQUFVLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDbEMsTUFBTUMsV0FBVztZQUNiTCxRQUFRTSxtQkFBbUIsQ0FBQyxXQUFXQztZQUN2Q1AsUUFBUU0sbUJBQW1CLENBQUMsU0FBU0U7UUFDekM7UUFDQSxNQUFNRCxVQUFVO1lBQ1pKLFFBQVFNLEtBQUtULFFBQVFVLE1BQU07WUFDM0JMO1FBQ0o7UUFDQSxNQUFNRyxRQUFRO1lBQ1ZKLE9BQU9KLFFBQVFRLEtBQUs7WUFDcEJIO1FBQ0o7UUFDQUwsUUFBUVcsZ0JBQWdCLENBQUMsV0FBV0o7UUFDcENQLFFBQVFXLGdCQUFnQixDQUFDLFNBQVNIO0lBQ3RDO0lBQ0FQLFFBQ0tXLElB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LENBQUN6QixRQUFVZixzQkFBc0J5QixHQUFHLENBQUNWO0FBRWlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm5iLy4vbm9kZV9tb2R1bGVzL2lkYi9idWlsZC93cmFwLWlkYi12YWx1ZS5qcz84NjljIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluc3RhbmNlT2ZBbnkgPSAob2JqZWN0LCBjb25zdHJ1Y3RvcnMpID0+IGNvbnN0cnVjdG9ycy5zb21lKChjKSA9PiBvYmplY3QgaW5zdGFuY2VvZiBjKTtcblxubGV0IGlkYlByb3h5YWJsZVR5cGVzO1xubGV0IGN1cnNvckFkdmFuY2VNZXRob2RzO1xuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRJZGJQcm94eWFibGVUeXBlcygpIHtcbiAgICByZXR1cm4gKGlkYlByb3h5YWJsZVR5cGVzIHx8XG4gICAgICAgIChpZGJQcm94eWFibGVUeXBlcyA9IFtcbiAgICAgICAgICAgIElEQkRhdGFiYXNlLFxuICAgICAgICAgICAgSURCT2JqZWN0U3RvcmUsXG4gICAgICAgICAgICBJREJJbmRleCxcbiAgICAgICAgICAgIElEQkN1cnNvcixcbiAgICAgICAgICAgIElEQlRyYW5zYWN0aW9uLFxuICAgICAgICBdKSk7XG59XG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkge1xuICAgIHJldHVybiAoY3Vyc29yQWR2YW5jZU1ldGhvZHMgfHxcbiAgICAgICAgKGN1cnNvckFkdmFuY2VNZXRob2RzID0gW1xuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5hZHZhbmNlLFxuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWVQcmltYXJ5S2V5LFxuICAgICAgICBdKSk7XG59XG5jb25zdCBjdXJzb3JSZXF1ZXN0TWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zYWN0aW9uRG9uZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgICAgICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh3cmFwKHJlcXVlc3QucmVzdWx0KSk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgIH0pO1xuICAgIHByb21pc2VcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIFNpbmNlIGN1cnNvcmluZyByZXVzZXMgdGhlIElEQlJlcXVlc3QgKCpzaWdoKiksIHdlIGNhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWxcbiAgICAgICAgLy8gKHNlZSB3cmFwRnVuY3Rpb24pLlxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJDdXJzb3IpIHtcbiAgICAgICAgICAgIGN1cnNvclJlcXVlc3RNYXAuc2V0KHZhbHVlLCByZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYXRjaGluZyB0byBhdm9pZCBcIlVuY2F1Z2h0IFByb21pc2UgZXhjZXB0aW9uc1wiXG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgLy8gVGhpcyBtYXBwaW5nIGV4aXN0cyBpbiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgYnV0IGRvZXNuJ3QgZG9lc24ndCBleGlzdCBpbiB0cmFuc2Zvcm1DYWNoZS4gVGhpc1xuICAgIC8vIGlzIGJlY2F1c2Ugd2UgY3JlYXRlIG1hbnkgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0LlxuICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQocHJvbWlzZSwgcmVxdWVzdCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odHgpIHtcbiAgICAvLyBFYXJseSBiYWlsIGlmIHdlJ3ZlIGFscmVhZHkgY3JlYXRlZCBhIGRvbmUgcHJvbWlzZSBmb3IgdGhpcyB0cmFuc2FjdGlvbi5cbiAgICBpZiAodHJhbnNhY3Rpb25Eb25lTWFwLmhhcyh0eCkpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCh0eC5lcnJvciB8fCBuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydEVycm9yJywgJ0Fib3J0RXJyb3InKSk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgIH0pO1xuICAgIC8vIENhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWwuXG4gICAgdHJhbnNhY3Rpb25Eb25lTWFwLnNldCh0eCwgZG9uZSk7XG59XG5sZXQgaWRiUHJveHlUcmFwcyA9IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRyYW5zYWN0aW9uLmRvbmUuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ2RvbmUnKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbkRvbmVNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICAvLyBQb2x5ZmlsbCBmb3Igb2JqZWN0U3RvcmVOYW1lcyBiZWNhdXNlIG9mIEVkZ2UuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ29iamVjdFN0b3JlTmFtZXMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5vYmplY3RTdG9yZU5hbWVzIHx8IHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2UgdHguc3RvcmUgcmV0dXJuIHRoZSBvbmx5IHN0b3JlIGluIHRoZSB0cmFuc2FjdGlvbiwgb3IgdW5kZWZpbmVkIGlmIHRoZXJlIGFyZSBtYW55LlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdzdG9yZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1sxXVxuICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA6IHJlY2VpdmVyLm9iamVjdFN0b3JlKHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEVsc2UgdHJhbnNmb3JtIHdoYXRldmVyIHdlIGdldCBiYWNrLlxuICAgICAgICByZXR1cm4gd3JhcCh0YXJnZXRbcHJvcF0pO1xuICAgIH0sXG4gICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgaGFzKHRhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24gJiZcbiAgICAgICAgICAgIChwcm9wID09PSAnZG9uZScgfHwgcHJvcCA9PT0gJ3N0b3JlJykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldDtcbiAgICB9LFxufTtcbmZ1bmN0aW9uIHJlcGxhY2VUcmFwcyhjYWxsYmFjaykge1xuICAgIGlkYlByb3h5VHJhcHMgPSBjYWxsYmFjayhpZGJQcm94eVRyYXBzKTtcbn1cbmZ1bmN0aW9uIHdyYXBGdW5jdGlvbihmdW5jKSB7XG4gICAgLy8gRHVlIHRvIGV4cGVjdGVkIG9iamVjdCBlcXVhbGl0eSAod2hpY2ggaXMgZW5mb3JjZWQgYnkgdGhlIGNhY2hpbmcgaW4gYHdyYXBgKSwgd2VcbiAgICAvLyBvbmx5IGNyZWF0ZSBvbmUgbmV3IGZ1bmMgcGVyIGZ1bmMuXG4gICAgLy8gRWRnZSBkb2Vzbid0IHN1cHBvcnQgb2JqZWN0U3RvcmVOYW1lcyAoYm9vbyksIHNvIHdlIHBvbHlmaWxsIGl0IGhlcmUuXG4gICAgaWYgKGZ1bmMgPT09IElEQkRhdGFiYXNlLnByb3RvdHlwZS50cmFuc2FjdGlvbiAmJlxuICAgICAgICAhKCdvYmplY3RTdG9yZU5hbWVzJyBpbiBJREJUcmFuc2FjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc3RvcmVOYW1lcywgLi4uYXJncykge1xuICAgICAgICAgICAgY29uc3QgdHggPSBmdW5jLmNhbGwodW53cmFwKHRoaXMpLCBzdG9yZU5hbWVzLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcC5zZXQodHgsIHN0b3JlTmFtZXMuc29ydCA/IHN0b3JlTmFtZXMuc29ydCgpIDogW3N0b3JlTmFtZXNdKTtcbiAgICAgICAgICAgIHJldHVybiB3cmFwKHR4KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gQ3Vyc29yIG1ldGhvZHMgYXJlIHNwZWNpYWwsIGFzIHRoZSBiZWhhdmlvdXIgaXMgYSBsaXR0bGUgbW9yZSBkaWZmZXJlbnQgdG8gc3RhbmRhcmQgSURCLiBJblxuICAgIC8vIElEQiwgeW91IGFkdmFuY2UgdGhlIGN1cnNvciBhbmQgd2FpdCBmb3IgYSBuZXcgJ3N1Y2Nlc3MnIG9uIHRoZSBJREJSZXF1ZXN0IHRoYXQgZ2F2ZSB5b3UgdGhlXG4gICAgLy8gY3Vyc29yLiBJdCdzIGtpbmRhIGxpa2UgYSBwcm9taXNlIHRoYXQgY2FuIHJlc29sdmUgd2l0aCBtYW55IHZhbHVlcy4gVGhhdCBkb2Vzbid0IG1ha2Ugc2Vuc2VcbiAgICAvLyB3aXRoIHJlYWwgcHJvbWlzZXMsIHNvIGVhY2ggYWR2YW5jZSBtZXRob2RzIHJldHVybnMgYSBuZXcgcHJvbWlzZSBmb3IgdGhlIGN1cnNvciBvYmplY3QsIG9yXG4gICAgLy8gdW5kZWZpbmVkIGlmIHRoZSBlbmQgb2YgdGhlIGN1cnNvciBoYXMgYmVlbiByZWFjaGVkLlxuICAgIGlmIChnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpLmluY2x1ZGVzKGZ1bmMpKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAgICAgLy8gdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgICAgICAgIGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiB3cmFwKGN1cnNvclJlcXVlc3RNYXAuZ2V0KHRoaXMpKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgLy8gdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgICAgcmV0dXJuIHdyYXAoZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHJldHVybiB3cmFwRnVuY3Rpb24odmFsdWUpO1xuICAgIC8vIFRoaXMgZG9lc24ndCByZXR1cm4sIGl0IGp1c3QgY3JlYXRlcyBhICdkb25lJyBwcm9taXNlIGZvciB0aGUgdHJhbnNhY3Rpb24sXG4gICAgLy8gd2hpY2ggaXMgbGF0ZXIgcmV0dXJuZWQgZm9yIHRyYW5zYWN0aW9uLmRvbmUgKHNlZSBpZGJPYmplY3RIYW5kbGVyKS5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbilcbiAgICAgICAgY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHZhbHVlKTtcbiAgICBpZiAoaW5zdGFuY2VPZkFueSh2YWx1ZSwgZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSkpXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodmFsdWUsIGlkYlByb3h5VHJhcHMpO1xuICAgIC8vIFJldHVybiB0aGUgc2FtZSB2YWx1ZSBiYWNrIGlmIHdlJ3JlIG5vdCBnb2luZyB0byB0cmFuc2Zvcm0gaXQuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gd3JhcCh2YWx1ZSkge1xuICAgIC8vIFdlIHNvbWV0aW1lcyBnZW5lcmF0ZSBtdWx0aXBsZSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QgKGVnIHdoZW4gY3Vyc29yaW5nKSwgYmVjYXVzZVxuICAgIC8vIElEQiBpcyB3ZWlyZCBhbmQgYSBzaW5nbGUgSURCUmVxdWVzdCBjYW4geWllbGQgbWFueSByZXNwb25zZXMsIHNvIHRoZXNlIGNhbid0IGJlIGNhY2hlZC5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJSZXF1ZXN0KVxuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdCh2YWx1ZSk7XG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSB0cmFuc2Zvcm1lZCB0aGlzIHZhbHVlIGJlZm9yZSwgcmV1c2UgdGhlIHRyYW5zZm9ybWVkIHZhbHVlLlxuICAgIC8vIFRoaXMgaXMgZmFzdGVyLCBidXQgaXQgYWxzbyBwcm92aWRlcyBvYmplY3QgZXF1YWxpdHkuXG4gICAgaWYgKHRyYW5zZm9ybUNhY2hlLmhhcyh2YWx1ZSkpXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1DYWNoZS5nZXQodmFsdWUpO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSh2YWx1ZSk7XG4gICAgLy8gTm90IGFsbCB0eXBlcyBhcmUgdHJhbnNmb3JtZWQuXG4gICAgLy8gVGhlc2UgbWF5IGJlIHByaW1pdGl2ZSB0eXBlcywgc28gdGhleSBjYW4ndCBiZSBXZWFrTWFwIGtleXMuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0cmFuc2Zvcm1DYWNoZS5zZXQodmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59XG5jb25zdCB1bndyYXAgPSAodmFsdWUpID0+IHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5nZXQodmFsdWUpO1xuXG5leHBvcnQgeyByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgYXMgYSwgaW5zdGFuY2VPZkFueSBhcyBpLCByZXBsYWNlVHJhcHMgYXMgciwgdW53cmFwIGFzIHUsIHdyYXAgYXMgdyB9O1xuIl0sIm5hbWVzIjpbImluc3RhbmNlT2ZBbnkiLCJvYmplY3QiLCJjb25zdHJ1Y3RvcnMiLCJzb21lIiwiYyIsImlkYlByb3h5YWJsZVR5cGVzIiwiY3Vyc29yQWR2YW5jZU1ldGhvZHMiLCJnZXRJZGJQcm94eWFibGVUeXBlcyIsIklEQkRhdGFiYXNlIiwiSURCT2JqZWN0U3RvcmUiLCJJREJJbmRleCIsIklEQkN1cnNvciIsIklEQlRyYW5zYWN0aW9uIiwiZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMiLCJwcm90b3R5cGUiLCJhZHZhbmNlIiwiY29udGludWUiLCJjb250aW51ZVByaW1hcnlLZXkiLCJjdXJzb3JSZXF1ZXN0TWFwIiwiV2Vha01hcCIsInRyYW5zYWN0aW9uRG9uZU1hcCIsInRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcCIsInRyYW5zZm9ybUNhY2hlIiwicmV2ZXJzZVRyYW5zZm9ybUNhY2hlIiwicHJvbWlzaWZ5UmVxdWVzdCIsInJlcXVlc3QiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1bmxpc3RlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdWNjZXNzIiwiZXJyb3IiLCJ3cmFwIiwicmVzdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRoZW4iLCJ2YWx1ZSIsInNldCIsImNhdGNoIiwiY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uIiwidHgiLCJoYXMiLCJkb25lIiwiY29tcGxldGUiLCJET01FeGNlcHRpb24iLCJpZGJQcm94eVRyYXBzIiwiZ2V0IiwidGFyZ2V0IiwicHJvcCIsInJlY2VpdmVyIiwib2JqZWN0U3RvcmVOYW1lcyIsInVuZGVmaW5lZCIsIm9iamVjdFN0b3JlIiwicmVwbGFjZVRyYXBzIiwiY2FsbGJhY2siLCJ3cmFwRnVuY3Rpb24iLCJmdW5jIiwidHJhbnNhY3Rpb24iLCJzdG9yZU5hbWVzIiwiYXJncyIsImNhbGwiLCJ1bndyYXAiLCJzb3J0IiwiaW5jbHVkZXMiLCJhcHBseSIsInRyYW5zZm9ybUNhY2hhYmxlVmFsdWUiLCJQcm94eSIsIklEQlJlcXVlc3QiLCJuZXdWYWx1ZSIsImEiLCJpIiwiciIsInUiLCJ3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/idb/build/wrap-idb-value.js\n");

/***/ })

};
;