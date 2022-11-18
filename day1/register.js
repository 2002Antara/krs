function printError(elemId,hintMsg)
{
    document.getElementById(elemId).innerHTML=hintMsg;
}
var savechanges=document.getElementById("savechanges")
console.log(savechanges)
savechanges.onclick=function()
{
    validateform();
}
function validateform()
{
    console.log("hsds")
    var form=document.getElementById("myform")
    var username=form.username.value
    var phoneno=form.phoneno.value
    var email=form.email.value
    var gender=form.gender.value
    var qualification=form.qualification.value
    var course=form.course.value
    var country=form.country.value
    var condition=form.condition.value

    var nameErr=true;
    var phoneErr=true;
    var emailErr=true;
    var genderErr=true;
    var qualificationErr=true;
    var courseErr=true;
    var countryErr=true;
    var conditionErr=true;
    if(username=="")
    {
        printError("nameErr","please enter valid name")
    }
    else
    {
        if(username.length<5)
        {
            printError("nameErr","please enter valid name");
        }
        else
        {
            printError("nameErr","");
            nameErr=false;
        }
    }
    if(phoneno=="")
    {
        printError("phoneErr","please enter valid mobile number")
    }
    else
    {
        if(phoneno.length<5)
        {
            printError("phoneErr","please enter valid mobile number");
        }
        else
        {
            printError("phoneErr","");
            phoneErr=false;
        }
    }
    if(email=="")
    {
        printError("emailErr","please enter valid email id")
    }
    else
    {
        if (!email.includes("@")) 
          {
            printError("emailErr", "Please enter a valid email address");
          }
           else 
           {
            printError("emailErr", "");
            emailErr = false;
           }
    }
    if (gender == "") 
     {
        printError("genderErr", "Please select your gender");
      } 
      else
       {
        printError("genderErr", "");
        genderErr = false;
       }
    if(qualification=="")
    {
        printError("qualificationErr","please choose an option")
    }
    else
    {
        printError("qualificationErr", "");
        qualificationErr = false;
        
    }
    if(course=="")
    {
        printError("courseErr","please choose an option")
    }
    else
    {
        printError("courseErr", "");
        courseErr = false;
        
    }
    if (country == "Select") 
    {
        printError("countryErr", "Please select your country");
      } 
      else 
      {
        printError("countryErr", "");
        countryErr = false;
      }
    if(condition=="")
    {
        printError("conditionErr","please choose an option")
    }
    else
    {
        printError("conditionErr", "");
        conditionErr = false;
        
    }
    console.log(nameErr,phoneErr,emailErr,genderErr,qualificationErr, courseErr,countryErr,conditionErr)
    if((nameErr||phoneErr||emailErr||genderErr||qualificationErr|| courseErr||countryErr||conditionErr)==true)
    {
        return false;
    }
    else
    {
        var dataPreview=
        "you have entered the following details:\n"+
        "Name:"+
        username+
        "\n"+
        "Phone:"+
        phoneno+
        "\n"+
        "Email:"+
        email+
        "\n"+
        "Gender:"+
        gender+
        "\n"+
        "Qualification:"+
        qualification+
        "\n"+
        "Course:"+
        course+
        "\n"+
        "Country:"+
        country+
        "\n"+
        "Conditions:"+
        condition;
        alert(dataPreview);

    }
}     
