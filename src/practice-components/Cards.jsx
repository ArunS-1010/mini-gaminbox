import React from 'react'

const Cards = (props) => {
  const {
    image = 'https://cdn-icons-png.flaticon.com/512/9723/9723260.png',
    title = 'NOT FOUND',
    content = 'default message',
    year = '2025',
    hideYear = false,
  } = props

  return (
    <>
      <div className="card d-flex justify-content-evenly align-items-center p-3 w-25 mx-3">
        <img src={image} alt="react logo" width={100} height={100} />
        <h4 className="mt-3">{title}</h4>
        <p>{content}</p>
        {!hideYear && <small>{year}</small>} {/* conditional rendering  */}
      </div>
    </>
  )

  // OR, for conditional rendering

  //   if (hide == true) {
  //     return (
  //       <>
  //         <div className="card d-flex justify-content-evenly align-items-center p-3 w-25 mx-3">
  //           <img src={image} alt="react logo" width={100} height={100} />
  //           <h4 className="mt-3">{title}</h4>
  //           <p>{content}</p>
  //         </div>
  //       </>
  //     )
  //   } else {
  //     return (
  //       <>
  //         <div className="card d-flex justify-content-evenly align-items-center p-3 w-25 mx-3">
  //           <img src={image} alt="react logo" width={100} height={100} />
  //           <h4 className="mt-3">{title}</h4>
  //           <p>{content}</p>
  //           <small>{year}</small>
  //         </div>
  //       </>
  //     )
  //   }
}

export default Cards
