How to integrate Bimplus components into javascript webpage.


- include bimplus components script file with required version of the components 

e.g. via link to npm package (0.0.50 is the version of the package):
<script src="https://unpkg.com/bimplus-components@0.0.50/dist/bimplus-components/bimplus.js"></script>


- download and place required bimplus components assets in /assets/images folder.
  You can find all required assets in npm repository e.g. : 
  https://unpkg.com/browse/bimplus-components@0.0.50/dist/assets/images/
  
- then you can use bimplus components you want in the page 
  e.g. <bimplus-navbar> </bimplus-navbar>