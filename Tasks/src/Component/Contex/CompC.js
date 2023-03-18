// import React from 'react'

// function CompC(props) {
//   return (
//     <div>
//         compc {props.name.name}
//     </div>
//   )
// }

// export default CompC

import React from 'react'
import { ChannelContext, UserContext } from './CompA'
import { useContext } from 'react'

// function CompC() {
//     return (
//         <UserContext.Consumer>
//             {name => {
//                 return (
//                     <ChannelContext.Consumer>
//                         {val => {
//                             return (
//                                 <div>
//                                     CompC {name} {val}
//                                 </div>
//                             )
//                         }}
//                     </ChannelContext.Consumer>
//                 )
//             }}
//         </UserContext.Consumer>
//     )
// }

//by use state hook
function CompC(){

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)


    return(
        <div>
            compc {user} {channel}
        </div>
    )
}

export default CompC