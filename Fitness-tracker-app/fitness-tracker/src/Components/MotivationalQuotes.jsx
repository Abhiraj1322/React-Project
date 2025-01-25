import React from 'react'

const MotivationalQuotes = ({Quote}) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-green-100 rounded-lg shadow-lg mt-6">
      <h4 className="text-2xl font-semibold text-green-600 mb-4  text-center">Keep Going</h4>
      <p className="text-grey-100 mt-2">{Quote}</p>
    </div>
  )
}

export default MotivationalQuotes
