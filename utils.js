export function isActivePath(currentPath, href) {
    if (href === '/' && (currentPath === '/' || currentPath === '/index.html')) {
      return true;
    }
    return currentPath === href || currentPath.includes(href);
  }
  
  export function getUserName() {
    const userJSON = localStorage.getItem('user');
    if (!userJSON) return null;
    const user = JSON.parse(userJSON);
    return user.name || null;
  }
  