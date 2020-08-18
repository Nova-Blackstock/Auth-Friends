import React from 'react'
import moment from 'moment'
import Loader from 'react-loader-spinner'

import { axiosWithAuth } from '../utils/axiosWithAuth'

class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData()
    }

    getData = () =>{
        axiosWithAuth()
            .get('/api/friends')
            .then(res =>{
                console.log(res)
            })
            .catch(err =>{
                console.log(err.message)
            })
    }
}

export default Friends