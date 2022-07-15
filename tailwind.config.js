module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      colors:
        {
          'red':'hsl(0, 100%, 74%)',
          'green':'hsl(154, 59%, 51%)',
          'light-green':'hsl(154,78%,58%)',
          'blue':'hsl(248, 32%, 49%)',
          'dark-blue':'hsl(249, 10%, 26%)',
          'grayish-blue':'hsl(246, 25%, 77%)',
        },
        fontFamily:
        {
            'poppins':['poppins']
        },
        fontSize:
        {

        }
    },
  },
  plugins: [],
}
