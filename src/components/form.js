import React from 'react'
import {useState} from 'react'

const Form =()=>{
         const [title, settitle]= useState('');
          const [location, setlocation]= useState('');
           const [minyear, setminyear]= useState('');
            const [maxyear, setmaxyear]= useState('');
             const [description, setdescription]= useState('');
              const [cetagory, setcetagory]= useState('');
               const [farea, setfarea]= useState('');
                const [minbatch, setminbatch]= useState('');
                 const [maxbatch, setmaxbatch]= useState('');
                  const [tags, settags]= useState('');

                  const [titleerr, settitleerr]= useState('');
                  const [locationerr, setlocationerr]= useState('');
                  const [descriptionerr, setdescriptionerr]= useState('');
                  const [tagserr, settagserr]= useState('');







         const postit=(e)=>{
           console.log(title+location+minyear+maxyear+description+cetagory+cetagory+farea+minbatch+maxbatch+tags)
           e.preventDefault();

           localStorage.setItem('title', title);
           localStorage.setItem('location', location);
           localStorage.setItem('minyear', minyear);
           localStorage.setItem('maxyear', maxyear);
           localStorage.setItem('description', description);
           localStorage.setItem('cetagory', cetagory);
           localStorage.setItem('farea', farea);
           localStorage.setItem('minbatch', minbatch);
           localStorage.setItem('maxbatch', maxbatch);
           localStorage.setItem('tags', tags);

           const isValid= formvalidation();
         }

         const formvalidation = () =>{
           const titleerr = {};
           const locationerr = {};
           const descriptionerr = {};
           const tagserr = {} ;
           let isValid = true;


           if(title===''){
             titleerr.titlevalidationempty = "Job Title cannot be empty!";
             isValid=false;
           }

           if(location===''){
             locationerr.locationvalodation = "This feild cannot be empty!";
             isValid=false;
           }

           if(title.trim().length<500){
             descriptionerr.titlevalidations = "Job Description is so short!";
            isValid=false;
           }
           if(tags===''){
             tagserr.locationvalodation = "This feild cannot be empty!";
             isValid=false;
           }
           settitleerr(titleerr);
           setlocationerr(locationerr);
           setdescriptionerr(descriptionerr);
           settagserr(tagserr);
           return isValid;
         }
  return(
    <form onSubmit={postit}>
      <h2 style={{color:'green'}}> Basic Details</h2>
      <label>Job Title*</label><br/>
      <input type="text"
      placeholder="Write a title that appropiately discrive this job"
      onChange={(e)=>{settitle(e.target.value)}} />
      {Object.keys(titleerr).map((key)=>{
        return <div style={{color: "red"}}>{titleerr[key]}</div>
      })}

      <label>Location*</label><br/>
      <input type="text"
      placeholder="+ Add Location"
      onChange={(e)=>{setlocation(e.target.value)}} />
      {Object.keys(locationerr).map((key)=>{
        return <div style={{color: "red"}}>{locationerr[key]}</div>
      })}

      <label>Years of Experience*</label><br/>
      <select onChange={(e)=>{setminyear(e.target.value)}} >
      <option value="" disabled selected >Min Year</option>
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
      </select>
      <select onChange={(e)=>{setmaxyear(e.target.value)}} >
      <option value="" disabled selected >Max Year</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
     </select><br/>

        <label>Job Description*</label><br/>
     <textarea rows="10" cols="30"
     onChange={(e)=>{setdescription(e.target.value)}}
     placeholder="Describe the role and responsibilities, skill required for the job and help the candidates understand the role better"></textarea><br/>
     {Object.keys(descriptionerr).map((key)=>{
       return <div style={{color: "red"}}>{descriptionerr[key]}</div>
     })}

      <h2 style={{color:'green'}}> Targeting</h2>
      <div>
      <div className="st">
      <label>Cetagory*</label><br/>
      <select onChange={(e)=>{setcetagory(e.target.value)}}>
      <option value="" disabled selected >Select</option>
       <option value="Web Development">Web Development</option>
       <option value="Software Engineering">Software Engineering</option>
       <option value="Frontend">Frontend</option>
       <option value="Backend">Backend</option>
       <option value="Fullstack">Fullstack</option>
      </select>
      </div><br/>
       <div className="st">
      <label>Functional Area*</label><br/>
      <select onChange={(e)=>{setfarea(e.target.value)}}>
      <option value="" disabled selected >Select</option>
      <option value="Web Development">Web Development</option>
      <option value="Software Engineering">Software Engineering</option>
      <option value="Frontend">Frontend</option>
      <option value="Backend">Backend</option>
      <option value="Fullstack">Fullstack</option>
     </select>
     </div>
     </div>
     <br/>

      <label>Graduating Years*</label><br/>
      <select onChange={(e)=>{setminbatch(e.target.value)}}>
      <option value="" disabled selected >Min Batch</option>
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
      </select>
      <select onChange={(e)=>{setmaxbatch(e.target.value)}}>
      <option value="" disabled selected >Max Batch</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
     </select><br/>

      <label>Tags*</label><br/>
      <input type="text" placeholder="+ Add job tag"
      onChange={(e)=>{settags(e.target.value)}} />
      {Object.keys(tagserr).map((key)=>{
        return <div style={{color: "red"}}>{tagserr[key]}</div>
      })}

      <button type="submit" id="post">Post Job</button>
      <button type='submit' id="and">Post Job and add another job</button>
      <button id="cancel">cancel</button>

    </form>
  )
}
 export default Form
