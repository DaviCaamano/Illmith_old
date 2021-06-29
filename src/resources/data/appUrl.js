const appUrl = process.env.REACT_APP_ENV === 'local '
    ? process.env.REACT_APP_LOCALHOST
    : process.env.REACT_APP_ENV === 'dev '
        ?process.env.REACT_APP_URL
        :process.env.REACT_APP_URL

export default appUrl