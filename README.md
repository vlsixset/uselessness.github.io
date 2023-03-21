<html>
  <head>
    <title>GitHub Readme with Animated Background and Spinning Bread Image</title>
    <style>
      body {
        background-image: url("https://media.giphy.com/media/l2Sq6R7I1HvbMd7gQ/giphy.gif");
        background-repeat: no-repeat;
        background-size: cover;
      }
      #bread {
        animation: spin 3s linear infinite;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  </head>
  <body>
    <div align="center">
      <img id="bread" src="https://image.flaticon.com/icons/svg/14/14700.svg" width="100" height="100" />
    </div>
  </body>
</html>
