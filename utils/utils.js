export function checkAuthBeforeRender(isAuthenticated) {
    // If not authenticated, the utility function would have handled the redirection
    if (!isAuthenticated) {
        console.log(isAuthenticated)
        if (typeof window !== 'undefined') {
            //window.location.replace('/');
        }
        return null; // You can also render a loading indicator or a login prompt
    }
}