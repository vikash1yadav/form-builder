import React from 'react'

function ApiListCreator({ array }) {
  return (
    <div>
       
      {array.map(item => {

       return <> 
            { `{"${item}": {
                "is_required" : false,
                "is_readonly" : false,
                "mapping_type": "yesno_check",
                "type_of" : "string"
            }},`}
           
        </>
      })}
    </div>
  )
}

export default ApiListCreator
