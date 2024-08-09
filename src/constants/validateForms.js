export const validatePersonalInfo = ({ userPersonalDetails = {} }) => {
  const { Name, phone, email, address, pinCode, city } = userPersonalDetails;

  const validateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  if (!Name) {
    return "Please enter your full name";
  } else if (!phone) {
    return "Please enter mobile number";
  } else if (!email) {
    return "Please enter email id";
  } else if (!validateEmail(email)) {
    return "Invalid email address";
  } else if (!address) {
    return "Please enter address";
  } else if (!pinCode) {
    return "Please enter your pincode";
  } else if (!city) {
    return "Please enter your city name";
  }
};

export const validateEducationalDetails = ({ educationalInfo = [] }) => {
  if (educationalInfo?.length > 0) {
    const yearsSet = new Set();
    
    return educationalInfo.reduce((acc, ele) => {
      const yearOfPassing = ele.yearOfPassing ? ele.yearOfPassing.split('-')[0] : null;

      if (!ele.university) {
        return `Please enter university name for ${ele.level}`;
      } else if (!ele.percentage) {
        return `Please enter percentage for ${ele.level}`;
      } else if (!yearOfPassing) {
        return `Please enter year of passing for ${ele.level}`;
      } else if (yearsSet.has(yearOfPassing)) {
        return `Year of passing ${yearOfPassing} is duplicated for ${ele.level}`;
      } else {
        yearsSet.add(yearOfPassing);
      }
      return acc;
    }, "");
  } else {
    return "Please fill all the fields";
  }
};



export const validateWorkExperienceData = ({ workExperienceDetails = [] }) => {
  if (workExperienceDetails?.length > 0) {
    return workExperienceDetails.reduce((acc, ele) => {
      if (!ele.companyName) {
        return `Please enter company name for work experience ${ele.id}`;
      } else if (!ele.jobTitle) {
        return `Please enter designation for work experience ${ele.id}`;
      } else if (!ele.duration) {
        return `Please enter duration of work for work experience  ${ele.id}`;
      }
      return acc;
    }, "");
  } else {
    return "Please fill all the fields of work experience";
  }
};

export const validateTechSkills = ({ techData = {} }) => {
  if (techData?.tech?.length > 0) {
    return "";
  } else {
    return "Please enter at least one technical skill";
  }
};

export const validateDocuments = ({ documents = {} }) => {
  if (!documents?.resume?.name) {
    return "Resume is mandatory";
  }
};
