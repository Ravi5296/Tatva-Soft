// import React from 'react'
// import CompB from './CompB'

// function CompA() {
//   return (
//     <div>
//         <CompB name='ravi'/>
//     </div>
//   )
// }

// export default CompA

import React from 'react'
import CompB from './CompB'
import { createContext } from 'react'

export const UserContext = createContext()
export const ChannelContext = createContext()

function CompA() {
    return (
        <UserContext.Provider value={'ravi'}>
            <ChannelContext.Provider value={'Channel'}>
                <div>
                    <CompB />
                </div>
            </ChannelContext.Provider>
        </UserContext.Provider>
    )
}

export default CompA