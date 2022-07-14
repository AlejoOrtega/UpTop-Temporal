// const URL_BASE = 'http://localhost:3000/'

//GET -----------------------------------------------------
//get user scores
export const autoLogin = () => {
    let infoPack =  fetch(`/me`)
                    .then(res => res.json())
                    .catch(()=> false)
    
    return infoPack
}

export const getCourses = () => {
    let infoPack = fetch('/my-courses')
                    .then(res=> res.json())
                    .catch(()=> false)
    return infoPack
}

export const getBannedUsers = () => {
    let infoPack = fetch('/banned-users')
                    .then(res => res.json())
                    .catch(false)
    return infoPack;
}

export const getNotBannedUsers = () => {
    let infoPack = fetch('/not-banned-users')
                    .then(res => res.json())
                    .catch(false)
    return infoPack;
}

export const getAdminCourses = () => {
    let infoPack = fetch('/courses')
                    .then(res => res.json())
                    .catch(false)

    return infoPack
}

export const getPlans = () => {
    let infoPack = fetch('/plans')
                    .then(res => res.json())
                    .catch(false)

    return infoPack;
}

export const getCourseLinks = (id) => {
    let infoPack = fetch(`/courses/${id}/links`)
                    .then(res => res.json())
                    .catch(false)

    return infoPack;
}


//POST ----------------------------------------------
//post response login 
export const fetchLogIn = (body) => {
    let infoPack = fetch(`/login`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .catch(err=>console.log(err))

    return infoPack
}

export const fetchSignUp = (body) => {
    
    let infoPack = fetch(`/signup`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .catch(err=>console.log(err))

    return infoPack
}

export const joinPlan = (typeOfPlan) => {
    let body = {
        title: typeOfPlan
    }
    let infoPack = fetch(`/join-plan`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res=>res.json())
    .catch((err)=>console.log(err))

    return infoPack
}

export const createNewCourse = (body) => {
    let infoPack = fetch(`/courses`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res=>res.json())
    .catch((err)=>console.log(err))

    return infoPack
}

export const createNewLink = (body) => {
    console.log(body)
    let infoPack = fetch(`/links`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res=>res.json())
    .catch((err)=>console.log(err))

    return infoPack
}


///UPDATE ---------------------------
//update username

export const updateUsername = (newUsername) => {
    let infoPack = fetch('/user',{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({new_username: newUsername})
    })
    .then(res => res.json())
    .catch(()=>false)

    return infoPack
}

export const changeUserBanStatus = (user, status) => {
    let infoPack = fetch('/users/ban',{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: user, banned: status})
    })
    .then(res => res.json())
    .catch(()=> false)

    return infoPack
}

export const updateCourseInformation = (body) => {
    let infoPack = fetch('/courses',{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .catch(()=> false)

    return infoPack
}

export const updateLinkInformation = (body) => {
    let infoPack = fetch('/links',{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .catch(()=> false)

    return infoPack
}

//DELETE ---------------------------------------------
//delete user
export const fetchLogOut = async() => {
    return await fetch(`/logout`,{
        method:'DELETE',
    })
    .then(()=>true)
    .catch(()=>false)
}

export const deleteAccount = async() => {
    return await fetch('/delete-account',{
        method:'DELETE'
    })
    .then(()=> true)
    .catch(()=> false)
}

export const deleteCourse = async(id) => {
    return await fetch(`/courses/${id}`,{
        method:'DELETE'
    })
    .then(()=> true)
    .catch(()=> false)
}

export const deleteLink = async(id) => {
    return await fetch(`/links/${id}`,{
        method:'DELETE'
    })
    .then(()=> true)
    .catch(()=> false)
}