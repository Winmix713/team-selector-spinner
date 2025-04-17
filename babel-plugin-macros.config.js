
// Enable styled-components macros for development environment
// This adds display names and file names to styled components for easier debugging
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    styledComponents: {
        fileName: isDev,
        displayName: isDev,
        pure: true,
        namespace: 'sc'
    }
}
