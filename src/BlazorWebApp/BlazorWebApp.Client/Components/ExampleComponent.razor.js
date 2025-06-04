let customListener = null;

/** Called once from .razor after the module has loaded */
export function initialise() {
    // Example of a JS-side “hook” that must later be removed
    customListener = () => console.debug('ExampleAlert listener active');
    window.addEventListener('examplealert:ping', customListener);
}

/** Remove event listeners or any other resources set up in initialise() */
export function dispose() {
    if (customListener) {
        window.removeEventListener('examplealert:ping', customListener);
        customListener = null;
    }
}

/** Simple demo action: show an alert */
export function showAlert(message) {
    alert(message);
}