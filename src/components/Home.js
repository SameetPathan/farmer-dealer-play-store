import React from 'react';
import Loader from './Loader';
import '../footer.css';
function Home() {

  return (
    <>
    <Loader></Loader>
    <div className='container'>
    <div class="card text-center mt-5">
        <div class="card-header bg-success ">
        <span className='text-white' style={{fontSize:"20px"}}>AgroDeal</span>  
        </div>
        <div class="card-body">
          <h5 class="card-title">Download You Android .apk file here and install <span><div class="blink">Download Available</div>
</span></h5>
         <a href="https://drive.google.com/uc?export=download&id=1hKiHVIVgOqLTJokffwXUW4ly38fXY9zC" class="btn btn-primary">Download</a>
   

        </div>
        <div class="card-footer text-muted">
         Updated on 05/04/2023        </div>
      </div>
      </div>

      <div className='container mt-2 mb-2'>

      <div class="alert alert-warning text-center" role="alert">
  Android App Developer Names
</div>

      <table class="table">
  <thead className='text-white' style={{backgroundColor:"#051922"}} >
    <tr>
 
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <td>Ankita</td>
      <td>Gabhale</td>
      <td>UI Developer</td>
    </tr>
    <tr>
      
      <td>Nameera</td>
      <td>Golandaz</td>
      <td>React Native Developer</td>
    </tr>
    <tr>
   
      <td>Sakshi </td>
      <td>Dangat</td>
      <td>Firebase Developer</td>
    </tr>

    <tr>
     
      <td>Pooja</td>
      <td>Khamkar</td>
      <td>React and React Native Developer</td>
    </tr>
    <tr>
   
      <td>Diksha</td>
      <td>Jedgule</td>
      <td>React Native Developer</td>
    </tr>
  </tbody>
</table>

      </div>
    </>
  );
}

export default Home
