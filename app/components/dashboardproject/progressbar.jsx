'use strict';
import React from 'react';
import {connect} from 'react-redux';
import plans from '../../fakeAPI/plans'

const Progressbar = (props) => (
    <div className="progress_bar">
        <p>API Calls {props.apiUsed}% used of {props.maxAPI}</p>
        <div className="apihead">
            <div className="api_bar" style={{width: props.apiUsed+'%'}}></div>
        </div>
        <p>Storage {props.storageUsed}% used of 200MB</p>
        <div className="storagehead">
            <div className="storage_bar" style={{width: props.storageUsed+'%'}}></div>
        </div>
    </div>);

const mapStateToProps = (state, selfProps) => {

    let apiUsed = 0
    let storageUsed = 0
    if(!state.loader.loading){
        if(state.analytics.bulkAnalytics.api){
            let bulkAnalyticsAPI = state.analytics.bulkAnalytics.api.filter((app) => (app.appId === selfProps.appId))[0]
            if(bulkAnalyticsAPI){
               apiUsed = bulkAnalyticsAPI.monthlyApiCount
            }
        }
        if(state.analytics.bulkAnalytics.storage){
            let bulkAnalyticsStorage = state.analytics.bulkAnalytics.storage.filter((app) => (app.appId === selfProps.appId))[0]
            if(bulkAnalyticsStorage){
               storageUsed = bulkAnalyticsStorage.size
            }
        }
    }
    let maxAPI = plans[selfProps.planId - 1].usage[0].features[0].limit.label;
    let maxStorage = plans[selfProps.planId - 1].usage[0].features[1].limit.label;
    let numMaxAPI = plans[selfProps.planId - 1].usage[0].features[0].limit.value;
    let numMaxStorage = plans[selfProps.planId - 1].usage[0].features[1].limit.value;

    return {
        apiUsed: Math.ceil(apiUsed ? (apiUsed / numMaxAPI) * 100 : 0),
        storageUsed: Math.ceil(storageUsed ? (storageUsed / numMaxStorage) / 100 : 0),
        maxAPI,
        maxStorage
    }
};

export default connect(mapStateToProps, null)(Progressbar);
