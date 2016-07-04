let ReferenceType = ["node", "path"];



class NodeRef {

}

class Workflow {

}

class ScriptNode {
    constructor() {

        this.activeWorkflows = new Array(Workflow)
        this.aspects = [""]
        this.aspectsSet = new Set("")//No sure
        this.aspectsShort = new Array("")//No sure
        this.associations = { "": [ScriptNode] }//no sure
        this.assocs = { "": [ScriptNode] }//no sure
        this.childAssociations = { "": [ScriptNode] }//no sure
        this.childAssocs = { "": [ScriptNode] }//no sure
        this.children = new Array();
        this.content = ""
        this.displayPath = ""
        this.downloadUrl = ""
        this.hasChildren = false
        this.icon16 = "" //not sure
        this.icon32 = "" //not sure
        this.id = "" //not sure
        this.isCategory = false
        this.isContainer = false
        this.isDocument = false
        this.isLinkToContainer = false
        this.isLinkToDocument = false
        this.isLocked = ""
        this.mimetype = ""
        this.name = ""
        this.nodeRef = NodeRef //not sure
        this.parent = ScriptNode
        this.parentAssociations = { "": [ScriptNode] }
        this.parentAssocs = { "": [ScriptNode] }
        this.parents = [ScriptNode]
        this.primaryParentAssoc = ScriptNode //not sure

        this.properties = {}
        this.qnamePath = ""
        this.qNameType = ""// not sure
        this.siteShortName = ""

        this.size = 0

        this.sourceAssociations = { "": [ScriptNode] }

        this.sourceAssocs = { "": [ScriptNode] }

        this.storeId = "" //not sure

        this.storeType = "" // not sure

        this.type = "" // not sure

        this.typeShort = "" // not sure

        this.url = "" // not sure

        this.webdavUrl = "" // not sure

        this.permissions = [""]//Not sure

        this.directPermissions = [""]//Not sure

        this.fullPermissions = [""]//Not sure

        this.settablePermissions = [""]//Not sure

        this.owner = ""
    }

    getPropertyNames(useShortQNames) {
        return this.properties;
    }

    getTypePropertyNames(useShortQNames) { return this.properties }//not sure

    getTypePropertyNames(useShortQNames) { return this.properties }//not sure

    childByNamePath(path) { return this.children[0] } //fix 

    childrenByXPath(xpath) { return new Array(ScriptNode) }

    childFileFolders() { return new Array(ScriptNode) }

    childFileFolders(files, folders) { return new Array(ScriptNode) }

    childFileFolders(files, folders, ignoreTypes) { return new Array(ScriptNode) }

    childFileFolders(files, folders, ignoreTypes, maxItems) { return new Array(ScriptNode) }
    childFileFolders(files, folders, ignoreTypes, skipOffset, maxItems, requestTotalCountMax, sortProp, sortAsc, queryExecutionId) { return new Array(ScriptNode) } //not sure 
    isScriptContent(obj) { return false }

    hasAspect(type) { return false }

    getChildAssocsByType(type) { return new Array(ScriptNode) }

    isSubType(type) { return false }

    exists() { return false }

    reset() { }

    toJSON() { return "" }//not sure

    toJSON(useShortQNames) { return "" }//not sure


    hasPermission(permission) { return false }

    inheritsPermissions() { return false }
    setInheritsPermissions(inherit) { }

    setPermission(permission) { }

    setPermission(permission, authority) { }

    removePermission(permission) { }
    removePermission(permission, authority) { }

    takeOwnership() { }

    createFolder(name) {
        var folder = new cmFolder();
        folder.properties = {
            "cm:name": name,
            name: name,
            "cm:title": name
        }
        return this.children[this.children.push(folder)];
    }
    createFolder(name, type) {
        //TODO code the type of node
        var folder = new cmFolder();
        folder.properties = {
            "cm:name": name,
            name: name,
            "cm:title": name
        }
        return this.children[this.children.push(folder)];
    }

    createFile(name) { return new cmContent() }
    createFile(name, type) { return new cmContent() }
    createNode(name, type) { return new cmContent() }
    createNode(name, type, assocType) { return new cmContent() }
    createNode(name, type, properties) { return new cmContent() }
    createNode(name, type, properties, assocType) { return new cmContent() }
    createNode(name, type, properties, assocType, assocName) { return new cmContent() }

    addNode(node) { }

    removeNode(node) { }

    removeAssociation(target, assocType) { return {} }

    remove() { return false }

    copy(destination) { return cmCmobject }
    copy(destination, deepCopy) { return cmCmobject }

    move(destination) { return false }
    move(source, destination) { return false }

    addAspect(aspect) { return false }
    addAspect(aspect, properties) { return false }

    removeAspect(aspect) { return false }

    specializeType(type) { return false }

    revert(history, majorVersion, versionLabel) { }
    revert(history, majorVersion, versionLabel, deep) { }

    save() { }
}


class cmAuthority extends ScriptNode { }

class cmPerson extends cmAuthority {
    constructor() {
        super()
        this.properties = {
            userName: "",
            "cm:userName": "",
            "cm:homeFolder": new ScriptNode(),
            "cm:firstName": "",
            "cm:lastName": "",
            "cm:middleName": "",
            "cm:email": "",
            "cm:organizationId": "",
            "cm:homeFolderProvider": "",
            "cm:defaultHomeFolderPath": "",
            "cm:presenceProvider": "",
            "cm:presenceUsername": "",
            "cm:organization": "",
            "cm:jobtitle": "",
            "cm:location": "",
            "cm:persondescription": "",
            "cm:telephone": "",
            "cm:mobile": "",
            "cm:companyaddress1": "",
            "cm:companyaddress2": "",
            "cm:companyaddress3": "",
            "cm:companypostcode": "",
            "cm:companytelephone": "",
            "cm:companyfax": "",
            "cm:companyemail": "",
            "cm:skype": "",
            "cm:instantmsg": "",
            "cm:userStatus": "",
            "cm:userStatusTime": new Date(),
            "cm:googleusername": "",
            "cm:emailFeedDisabled": false,
            "cm:subscriptionsPrivate": false,
            "cm:emailFeedId": 0,
            "cm:sizeCurrent": 0,
            "cm:sizeQuota": 0,
        }
        this.assocs = {
            "": [ScriptNode],
            "cm:avatar": [ScriptNode]
        }
    }

}

class cmCmobject extends ScriptNode {
    constructor() {
        super()
        this.properties = {
            "cm:name": "",
            name: ""
        }
    }
}
class cmFolder extends cmCmobject {
    constructor() {
        super()
        this.childAssocs = {
            "": [ScriptNode],
            "cm:contains": [ScriptNode]
        }
        this.childAssociations = {
            "": [ScriptNode],
            "cm:contains": [ScriptNode]
        }
    }

}
class cmContent extends cmCmobject {
    constructor() {
        super()
        this.childAssocs = {
            "": [ScriptNode],
            "cm:contains": [ScriptNode]
        }
        this.properties = {
            "cm:name": "",
            name: "",
            "cm:content": ""
        }
    }

}


const guest = false;
const server = "";
/* Web scripts only*/
const model = {};


const companyhome = new cmFolder("Espacio de empresa");
/*companyhome.properties["cm:name"] =
    companyhome.properties["cm:title"] = "Espacio de empresa";*/

companyhome.properties.id = "7e72ae34-4234-4995-b60b-b0ad8eececd1";

const dataDictionary = new cmFolder();
dataDictionary.properties["cm:name"] =
    dataDictionary.properties["cm:name"] =
    dataDictionary.properties["cm:title"] = "Diccionario de datos";
dataDictionary.properties.id = "7e72ae34-4234-4995-b60b-b0ad8eececd2";

const guestSpace = new cmFolder();
guestSpace.properties["cm:name"] =
    guestSpace.properties["cm:name"] =
    guestSpace.properties["cm:title"] = "Espacio de invitado";
guestSpace.properties.id = "7e72ae34-4234-4995-b60b-b0ad8eececd3";

const usersPersonalSpace = new cmFolder();
usersPersonalSpace.properties["cm:name"] =
    usersPersonalSpace.properties["cm:name"] =
    usersPersonalSpace.properties["cm:title"] = "Espacios personales de usuarios";
usersPersonalSpace.properties.id = "7e72ae34-4234-4995-b60b-b0ad8eececd4";

// TODO: cambiar a st ahora es cm
const site = new cmFolder();
site.properties["cm:name"] =
    site.properties["cm:name"] =
    site.properties["cm:title"] = "Sitios";
site.properties.id = "7e72ae34-4234-4995-b60b-b0ad8eececd5";

companyhome.children = [dataDictionary, guestSpace, usersPersonalSpace];

const person = new cmPerson()
const roothome = new cmFolder()
const script = new cmCmobject()
const space = new ScriptNode()
const userhome = new cmFolder()

const args = new Array("")
const argsM = new Array("")
const cache = {}
const headers = [""]
const headersM = [""]
const session = {}
const url = {}
const logger = {
    log: function (params) {
        return params;
    }
}

// workflow
const bpm_workflowDescription = "" //not sure
const bpm_workflowDueDate = new Date()
const bpm_workflowPriority = 0
const bpm_package = new cmFolder()//Not sure
const bpm_context = new cmFolder()
const initiator = new cmPerson()
const initiatorhome = new cmFolder()//FIXME: cm:space

//work in progress

class searchObject {
    constructor() {
        this.query = "",          //mandatory, in appropriate format and encoded for the given language
            this.store = "",          //optional, defaults to 'workspace://SpacesStore'
            this.language = "",       //optional, one of: lucene, xpath, jcr-xpath, fts-alfresco - defaults to 'lucene'
            this.templates = {            //optional, Array of query language template objects (see below) - if supported by the language 
                field: "",          //mandatory, custom field name for the template
                template: ""        //mandatory, query template replacement for the template
            },
            this.sort = {                 //optional, Array of sort column objects (see below) - if supported by the language
                column: "",         //mandatory, sort column in appropriate format for the language
                ascending: false      //optional, defaults to false
            },
            this.page = {                 //optional, paging information object (see below) - if supported by the language 
                maxItems: 0,       // optional, max 0 of items to return in result set
                skipCount: 0       // optional, 0 of items to skip over before returning results
            },
            this.namespace = "",      //optional, the default namespace for properties
            this.defaultField = "",   //optional, the default field for query elements when not explicit in the query
            this.onerror = ""
    }
    //optional, result on error - one of: exception, no-results - defaults to 'exception'
}

class Search_API {
    constructor() { }

    findNode(nodeRef) { return new ScriptNode() }

    findNode(nodeRef) { return new ScriptNode() }

    findNode(referenceType, reference) { return new ScriptNode() }

    ISO9075Encode(rawstring) { return "" }

    ISO9075Decode(encodedstring) { return "" }

    isValidXpathQuery(query) { return false }

    luceneSearch(search) { return new Array(cmCmobject) }

    luceneSearch(store, search) { return new Array(cmCmobject) }

    luceneSearch(search, sortColumn, asc) { return new Array(cmCmobject) }

    luceneSearch(store, search, sortColumn, asc) { return new Array(cmCmobject) }

    luceneSearch(search, sortColumn, asc, max) { return new Array(cmCmobject) }

    luceneSearch(store, search, sortColumn, asc, max) { return new Array(cmCmobject) }

    query(searchobject) { return new Array(cmCmobject) }

    savedSearch(node) { return new Array(cmCmobject) }

    savedSearch(node) { return new Array(cmCmobject) }

    selectNodes(search) { return new Array(cmCmobject) }

    selectNodes(store, search) { return new Array(cmCmobject) }

    tagSearch(store, tag) { return new Array(cmCmobject) }
    xpathSearch(query) { return new Array(cmCmobject) }

    xpathSearch(store, query) { return new Array(cmCmobject) }
}

//Search API
let search = new Search_API();

