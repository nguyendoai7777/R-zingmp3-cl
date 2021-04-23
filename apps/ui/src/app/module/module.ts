export const getEndPointUrl = () => {
  const url = window.location.href;
  return url.split('/').slice(3).join('/');
};
