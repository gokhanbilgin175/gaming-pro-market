import React from 'react'
import Spacer from '../../components/common/spacer/spacer'
import AccountForm from '../../components/customer/account/account-form'

import CustomerTemplate from '../../templates/customer-template'

const AccountPage = () => {
  return (
    <CustomerTemplate>
        <Spacer height={150}/>
       <AccountForm/>
        <Spacer/>

    </CustomerTemplate>
  )
}

export default AccountPage