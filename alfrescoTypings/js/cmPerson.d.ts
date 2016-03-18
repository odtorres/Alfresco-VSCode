interface cmAuthority extends ScriptNode{}
interface cmPerson extends cmAuthority{
    properties: {
        userName : string
        "cm:userName" : string
        "cm:homeFolder":ScriptNode
        "cm:firstName":string
        "cm:lastName":string
        "cm:middleName":string
        "cm:email":string
        "cm:organizationId":string
        "cm:homeFolderProvider":string
        "cm:defaultHomeFolderPath":string
        "cm:presenceProvider":string
        "cm:presenceUsername":string
        "cm:organization":string
        "cm:jobtitle":string
        "cm:location":string
        "cm:persondescription":string
        "cm:telephone":string
        "cm:mobile":string
        "cm:companyaddress1":string
        "cm:companyaddress2":string
        "cm:companyaddress3":string
        "cm:companypostcode":string
        "cm:companytelephone":string
        "cm:companyfax":string
        "cm:companyemail":string
        "cm:skype":string
        "cm:instantmsg":string
        "cm:userStatus":string
        "cm:userStatusTime":Date
        "cm:googleusername":string
        "cm:emailFeedDisabled":boolean
        "cm:subscriptionsPrivate":boolean
        "cm:emailFeedId":number
        "cm:sizeCurrent":number
        "cm:sizeQuota":number        
    }
    assocs : {
        "":Array<ScriptNode>,
        "cm:avatar" : Array<ScriptNode>}
}
