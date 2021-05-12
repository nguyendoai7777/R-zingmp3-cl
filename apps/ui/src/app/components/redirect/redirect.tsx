import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface IRedirectLink {
  pathName: string;
  contentName: string;
  documentTitle?: string;
}

const RedirectLink: React.FC<IRedirectLink> = ({ contentName, pathName, documentTitle }) => {
  const [title, setTitle] = React.useState<string>('');
  const resetTitle = (path: string) => {
    setTitle(path);
    document.title = title;
  };
  return (
    <div className='lw' onClick={() => resetTitle(pathName)}>
      <Link to={pathName}>{contentName}</Link>
    </div>
  );
};

export default RedirectLink;
