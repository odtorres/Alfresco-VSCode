interface cmCmobject extends ScriptNode{
    properties: {
        "cm:name":string,
        name:string
    }
}
interface cmFolder extends cmCmobject{
    childAssocs:{
        "":Array<ScriptNode>,
        "cm:contains":Array<ScriptNode>
    }
    childAssociations:{
        "":Array<ScriptNode>,
        "cm:contains":Array<ScriptNode>
    }
}
interface cmContent extends cmCmobject{
    childAssocs:{
        "":Array<ScriptNode>,
        "cm:contains":Array<ScriptNode>
    }
    properties: {
        "cm:name":string,
        name:string,
        "cm:content":string
    }
}