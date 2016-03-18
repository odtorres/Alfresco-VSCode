interface ScriptNode{
    /**
     * Returns an array of all active workflows in which this node is involved. Null is returned if the node is not part of an active workflow.
     * The following code snippet obtains a list of workflow objects for the file TEST_FILE_0.TXT:
     * var node = companyhome.childByNamePath("TEST_FILE_0.TXT");
     * var workflows = node.activeWorkflows; */
    activeWorkflows : Array<Workflow>
    /**A read-only array of the fully qualified QName strings applied to the node */
    aspects : Array<string>
    /**A list of aspects applied to this node */
    aspectsSet : Set<string>//No sure
    /**An array of aspects as short prefix qnames applied to this node */
    aspectsShort : Array<string>//No sure
    /**A read-only associative array of the target associations of the node. Each named entry in the array contains an array of the script node objects on the end of the association.
     * Example: mynode.assocs["cm:translations"][0] */
    associations: {"":Array<ScriptNode>}//no sure
    /**A read-only associative array of the target associations of the node. Each named entry in the array contains an array of the script node objects on the end of the association.
     * Example: mynode.assocs["cm:translations"][0] */
    assocs: {"":Array<ScriptNode>}//no sure
    /**A read-only associative array of the child associations of the node. Each named entry in the array contains an array of the script node objects on the end of the association.
     * Example: myforumnode.childAssocs["fm:discussion"][0] */
    childAssociations: {"":Array<ScriptNode>}//no sure
    /**A read-only associative array of the child associations of the node. Each named entry in the array contains an array of the script node objects on the end of the association.
     * Example: myforumnode.childAssocs["fm:discussion"][0] */
    childAssocs: {"":Array<ScriptNode>}//no sure
    /**A read-only JavaScript array of the child node objects
     * Example: mynode.children[0] */
    children : Array<ScriptNode>
    /**The content string for this node from the default content property (ContentModel.PROP_CONTENT). */
    content: string
    /**A read-only display path to this node */
    displayPath: string
    /**For a content document this is a read-only string representing the download (as attachment) URL for the content. For a container node this would be an empty string. */
    downloadUrl: string
    /**True if the node has children */
    hasChildren: boolean
    /**A read-only small icon image for this node */
    icon16: string //not sure
    /**A read-only large icon image for this node */
    icon32: string //not sure
    /**The GUID for the node */
    id: string //not sure
    /**Returns true if this node is a category, or false otherwise */
    isCategory: boolean
    /**Returns true if the node is a folder node, or false otherwise */
    isContainer: boolean
    /**Returns true if this node is a document, or false otherwise */
    isDocument: boolean
    /**Returns true if this node is a link to a container, or false otherwise */
    isLinkToContainer: boolean
    /**Returns true if this node is a link to a document, or false otherwise */
    isLinkToDocument: boolean
    /**Returns true if the node is locked, or false otherwise. Once a node is checked out it becomes locked. */
    isLocked: string
    /**A read/write value representing the MIME type of the content */
    mimetype: string
    /** Shortcut access to the cm:name property. Can be read and written to. */     
    name: string 
    /**The NodeRef corresponding to this node */
    nodeRef: NodeRef //not sure
    /**Primary parent node. This will be null if this is the root node. */
    parent: ScriptNode
    /**A read-only associative array of the parent associations of the node. Each named entry in the array contains an array of the script node objects on the end of the association.
     * Example: mynode.parentAssocs["cm:contains"][0] */
    parentAssociations: {"":Array<ScriptNode>}
    /**A read-only associative array of the parent associations of the node. Each named entry in the array contains an array of the script node objects on the end of the association.
     * Example: mynode.parentAssocs["cm:contains"][0] */
    parentAssocs: {"":Array<ScriptNode>}
    /**Array of the parent nodes */
    parents: Array<ScriptNode>
    /**The primary parent association so it is possible to obtain the association QName and the association type QName */
    primaryParentAssoc: ScriptNode //not sure
    /**Provides access to all the properties of this node. The properties returned are accessed by using an associative array. Properties of a node can be accessed in the following ways:
     * Example: node.properties["name"]
     * Example: node.properties.name */
    properties: Object
    /**A read-only QName type path to this node */
    qnamePath: string
    /**The QName type */
    qNameType: string// not sure
    /**Returns the name of the site this node is contained within. If the node is not contained within a site, the value is null */
    siteShortName: string
    /**A read-only long value that represents the size (in bytes) of the content attached to the node from the default content property. */
    size: number
    /**A read-only associative array of the source associations of the node. Each named entry in the array contains an array of the script node objects on the end of the association.
     * Example: mynode.assocs["cm:translations"][0] */
    sourceAssociations:  {"":Array<ScriptNode>}
    /**A read-only associative array of the source associations of the node. Each named entry in the array contains an array of the script node objects on the end of the association.
     * Example: mynode.assocs["cm:translations"][0] */
    sourceAssocs:  {"":Array<ScriptNode>}
    /**The store id for the node */
    storeId: string //not sure
    /**	The store type for the node */
    storeType: string // not sure
    /**Fully qualified QName type of the node */
    type: string // not sure
    /**Returns the type of the node as a short form qname. */
    typeShort: string // not sure
    /**For a content document, this method returns the URL to the content stream for the default content property. For a container node, this method returns the URL to browse to the folder in the web-client. */
    url: string // not sure
    /**A read-only string representing the webdav URL for the content */
    webdavUrl: string // not sure 
    /**getPropertyNames(useShortQNames) returns all the property names defined for this node as an array.
     * Example: var props = node.getPropertyNames(true);
     */
    getPropertyNames(useShortQNames:boolean):Array<string>
    /**getTypePropertyNames returns all the property names defined for this node's type as an array.
     * Example: var props = node.getTypePopertyNames();
     */
    getTypePropertyNames(useShortQNames:string):Array<string>//not sure
    /**getTypePropertyNames(useShortQNames) - Return all the property names defined for this node's type as an array.
     * useShortQNames: If true short-form qnames will be returned, else long-form.
     * Example: var props = node.getTypePopertyNames(false);  // return long form qnames
     */
    getTypePropertyNames(useShortQNames:boolean):Array<string>//not sure
    /**childByNamePath
     * childByNamePath(path) performs a path-based query based on the name property of the nodes.
     * Parameters: path The path to the node.
     * Returns: Returns a node found at the specified path relative to the current node. If this is not found, null is returned.
     * Example: var testingFolder =userhome.childByNamePath("QA/Performance/Testing"); */
    childByNamePath(path:string):ScriptNode
    /** childrenByXPath
     * childrenByXPath(xpath) performs an XPath-based query relative to the current node.
     * Parameters: xpath XPath query to select nodes.
     * Returns: Returns an array of the nodes found. If no results are matched, returns an empty array.
     * Example: var nodes = userhome.childrenByXPath("*[@cm:name='Finance Documents']/*"); */
    childrenByXPath(xpath:string):Array<ScriptNode>
    /** childFileFolders The childFileFolders methods are used to obtain an array of child files and folders for the node.
     * Parent topic: ScriptNode API [10]
     * childFileFolders()
     * Returns an array of child files and folders for the node.
     * Returns
     * Returns a JavaScript array of child file and folder nodes for the node. It automatically retrieves all sub-types of cm:content and cm:folder, and removes system type folders from the results.
     * Example
     * var nodes = node.childFileFolders();*/
    childFileFolders():Array<ScriptNode>
    /** childFileFolders(files, folders) 
     * Returns an array of child files and folders for the node, and as modified by parameters.
     * Parameters
     * files
     * A boolean value which if set to true specifies that files extending from cm:content should be returned.
     * folders
     * A boolean value which if set to true specifies that folders extending from cm:folder should be returned, ignoring sub-types of cm:systemfolder.
     * Returns
     * Returns a JavaScript array of child file and folder nodes for the node. It automatically retrieves all sub-types of cm:content and cm:folder, and removes system type folders from the results.
     * Example
     * var nodes = node.childFileFolders(false, true); // don't return files */
    childFileFolders(files:boolean, folders:boolean):Array<ScriptNode>
    /** childFileFolders(files, folders, ignoreTypes)
     * Returns an array of child files and folders for the node, and as modified by parameters.
     * Parameters
     * files
     * A boolean value which if set to true specifies that files extending from cm:content should be returned.
     * folders
     * A boolean value which if set to true specifies that folders extending from cm:folder should be returned, ignoring sub-types of cm:systemfolder.
     * ignoreTypes
     * Can be set to filter nodes of the specified type or types from the results returned. The type is specified in either long or short QName string form, as a single string or as an array of strings to filter multiple types.
     * Returns
     * Returns a JavaScript array of child file and folder nodes for the node. It automatically retrieves all sub-types of cm:content and cm:folder, and removes system type folders from the results.
     * Example
     * var nodes = node.childFileFolders(true, true, "cm:folder"); // ignore folders
     * var nodes = node.childFileFolders(true, true, ["cm:folder", "st:sites"]); // ignores folders and sites*/
    childFileFolders(files:boolean, folders:boolean, ignoreTypes:string|Array<string>):Array<ScriptNode>
    /** Returns a ScriptPagingNode object containing child files and folders for the node, as well as information to control paging of results. Parameters can be used to filter results. It is also possible to limit the number of nodes returned in the results.
     * CAUTION:This method is deprecated in version 4.0.
     * Parameters
     * files
     * A boolean value which if set to true specifies that files extending from cm:content should be returned.
     * folders
     * A boolean value which if set to true specifies that folders extending from cm:folder should be returned, ignoring sub-types of cm:systemfolder.
     * ignoreTypes
     * Can be set to filter nodes of the specified type or types from the results returned. The type is specified in either long or short QName string form, as a single string or as an array of strings to filter multiple types.
     * maxItems
     * An integer value which sets the maximum number of results to return.
     * Returns
     *
     * Returns a ScriptPagingNode object. The results are limited to the number specified by maxItems.
     *
     * Example
     * var results = companyhome.childFileFolders(true, false, "st:sites", 10);*/
    childFileFolders(files:boolean, folders:boolean, ignoreTypes:string|Array<string>,maxItems:number):Array<ScriptNode>
    /** companyhome.childFileFolders(true, false, "st:sites", 0, 100, 0, "cm:name", true, queryExecutionId);*/
    childFileFolders(files:boolean, folders:boolean, ignoreTypes:string|Array<string>, skipOffset:number, maxItems:number, requestTotalCountMax:number, sortProp:string, sortAsc:boolean, queryExecutionId):Array<ScriptNode> //not sure 
    /** isScriptContent
     * isScriptContent(obj) determines whether the supplied node property value is a ScriptContentData object.
     * Parameters
     * obj
     * Node property value
     * Returns
     * Boolean. Returns true if the supplied node property value is a ScriptContentData object; otherwise, it returns false.*/
    isScriptContent(obj:ScriptNode):boolean
    /** hasAspect
     * hasAspect(type) returns true if an aspect was applied to the node.
     * Parameters
     * type
     * The type of aspect whose presence will be checked for. Examples include cm:versionable and cm:templatable.
     * Returns
     * Boolean
     * Example
     * var isTemplatable = document.hasAspect("cm:templatable");
     * ...
     * var node = companyhome.childByNamePath("TEST_FILE_0.TXT");
     * model.result = node.hasAspect("cm:versionable");*/
    hasAspect(type:string):boolean
    /** getChildAssocsByType
     * getChildAssocsByType(String type) returns an array of the associations from the referenced node that match a specific object type.
     * Parameters
     * type
     * A string representing the specific object type.
     * Returns
     * Returns the aspects applied to this node as an array of short prefix qname strings.
     * Example
     * var assoc = node.getChildAssocsByType("cm:folder")[0];*/
    getChildAssocsByType(type:string):Array<ScriptNode>
    /** isSubType
     * isSubType(type) determines if this node is a subtype of the specified type.
     * Parameters
     * type
     * The qname type to test this object against (fully qualified or short-name form).
     * Returns
     * Returns true if this node is a subtype of the specified type (or itself of that type).*/
    isSubType(type:string)
    /** exists
     * exists() checks whether the node exists in the repository.
     * Returns
     * Returns a boolean, true if the node exists, false otherwise.
     * Example
     * if (node.exists()){
     *   ...
     * }      */
    exists():boolean
    /**reset
     * reset() resets the node cached state of a node.
     * This resets properties as follows:
     * 
     * this.name = null;
     * this.type = null;
     * this.properties = null;
     * this.aspects = null;
     * this.targetAssocs = null;
     * this.sourceAssocs = null;
     * this.childAssocs = null;
     * this.children = null;
     * this.hasChildren = null;
     * this.parentAssocs = null;
     * this.displayPath = null;
     * this.qnamePath = null;
     * this.isDocument = null;
     * this.isContainer = null;
     * this.parent = null;
     * this.primaryParentAssoc = null;
     * this.activeWorkflows = null;
     * this.siteName = null;
     * this.siteNameResolved = false;
     * Example
     * The following would reset the cached state of the node:
     * node.reset(); */
    reset():void
    /**toJSON
     * toJSON() returns the JSON representation of this node.
     * Parent topic: ScriptNode API [10]
     * toJSON
     * toJSON() - returns the JSON representation of this node. Long-form QNames are used in the result.
     * Returns
     * Returns the JSON representation of this node. */
    toJSON():string //not sure
    /** toJSON
     * toJSON(boolean useShortQNames) - returns the JSON representation of this node. Short-form QNames are used in the result.
     * Parameters
     * boolean useShortQNames
     * If true, short-form QNames will be returned, else long-form QNames will be returned.
     * Returns
     * Returns the JSON representation of this node. */
    toJSON(useShortQNames:boolean):string //not sure
    
    //Security/Permissions API
    /** Array of permissions applied to this node, including inherited permissions.*/
    permissions:Array<String>//Not sure
    /** Array of permissions applied to this node, excluding inherited permissions.*/
    directPermissions:Array<String>//Not sure
    /**Array of all permissions applied to this node, including inherited permissions. */
    fullPermissions:Array<String>//Not sure
    /**Array of settable permissions for this node. */
    settablePermissions:Array<String>//Not sure
    /**hasPermission(permission) checks if a user has the specified permission on a node.
     * The default permissions are in org.alfresco.service.cmr.security.PermissionService. The most commonly used permission checks are:
     * Read
     * Write
     * Delete
     * AddChildren
     * CreateChildren
     * 
     * Parameters
     * permission
     * The specified permission
     * 
     * Returns
     * Returns true if the user has the specified permission on the node. */
    hasPermission(permission:string):boolean
    /**inheritsPermissions inheritsPermissions() indicates whether the node inherits permissions.
     * Returns
     * Returns true if the node currently inherits its permissions from the parent space, and returns false to indicate the permissions are set specifically on the node.
     * */
    inheritsPermissions():boolean
    /**setInheritsPermissions
     * setInheritsPermissions(inherit) indicates that the node should inherit permissions from the parent node when set to true. Set to false to break the inheritance chain.
     * Parameters
     * inherit
     * True to indicate the node inherits from its parent. False, indicates the node should not inherit permissions from the parent node. */
    setInheritsPermissions(inherit:boolean):void
    /** setPermission(permission)
     * This method applies a permission to the node.
     * Parameters
     * 
     * permission
     * The permission to apply to the node. */
    setPermission(permission:string):void
    /** setPermission(permission, authority)
     * This method applies a permission for the specified authority (for example, a user name or group) to the node.
     * Note that the method does not check for the presence of the specified authority, so the method will not fail if a non-existent user is specified. The existence of a user or group should be checked for in preceding code for additional robustness.
     * Parameters
     * permission
     * The permission to apply to the node.
     * authority
     * The authority (user, group) for which the permission will be applied.
     * Example
     * var node = companyhome.childByNamePath("TEST_FILE_0.TXT");
     * node.setPermission("Read", "fred.bloggs");
     * node.setPermission("Delete", "Admin");
     * node.setPermission("Write", "GROUP_EVERYONE");
     * node.setPermission("Delete", "GROUP_ALFRESCO_ADMINISTRATORS");
     * node.setPermission("Delete", "Peter.Pickles"); // user doesn't exist!
     * model.permissions = node.getPermissions(); */
    setPermission(permission:string, authority:string):void
    /**The removePermission methods remove permissions for users from a node.
        1- removePermission(permission) removes a permission for all users from the node.
        Parameters
        permission
        The permission to remove.
        
        2-removePermission(permission, authority) removes a permission for the specified authority (for example, a user name or group) from the node.
        Parameters
        permission  The permission to remove.
        authority  The authority, typically a user name or group, to remove the permission for.
        Example
        var node = companyhome.childByNamePath("TEST_FILE_0.TXT");

        node.setPermission("Read", "fred.bloggs");
        node.setPermission("Delete", "Admin");
        node.setPermission("Write", "GROUP_EVERYONE");
        node.setPermission("Delete", "GROUP_ALFRESCO_ADMINISTRATORS");

        //...

        node.removePermission("Read", "fred.bloggs");

        model.permissions = node.getPermissions();        
        */
    removePermission(permission:string):void
    removePermission(permission:string, authority:string):void
    
    //Ownership API
    /**The owner property of the node (as a UID) */
    owner:string
    /** takeOwnership() this method results in the authenticated user running the script to take ownership of the node.
        Example

        If running the script while authenticated as admin, the following code would result in admin being returned as the owner.

        var node = companyhome.childByNamePath("TEST_FILE_0.TXT");

        node.setOwner("fred.bloggs"); // owner is now 'fred.bloggs'

        //...

        node.takeOwnership(); // currently authenticated user running script is 'admin'

        model.owner = node.getOwner(); */
    takeOwnership()
    
    //Modifying and creating API
    /**The createFolder methods create a new folder as a child of the current node.
        Note: Any unsaved property changes will be lost when this method is called. To preserve property changes call save() [74] first.
       
        1-createFolder(name) this method creates a new folder (cm:folder) node with the specified name as a child of this node.
        Parameters

        name
        The folder name
        Returns

        Returns the new node as the result of the function or returns null if the creation fails.

        Example:

        var myfolder = userhome.createFolder("New Folder");
        createFolder(name, type)

        2-createFolder(name, type) this method creates a new folder (cm:folder) node with the specified name and type as a child of this node.
        Parameters:
            name
                The folder name
            type
                The type of the folder to create. If null it defaults to type ContentModel.TYPE_FOLDER. Examples of folder types include cm:systemfolder, cm:folder, st:site, and fm:forum.
        Returns
            Returns the new node as the result of the function or returns null if the creation fails.

        Example:

        var myfolder = userhome.createFolder("New Folder", "st:site"); */
    createFolder(name:string):cmFolder
    createFolder(name:string, type:string):cmFolder
    /**The createFile methods create a new file as a child of the current node. Once created the file should have content set using the content property.
        Note: Any unsaved property changes will be lost when this method is called. To preserve property changes call save() [74] on the node first.

        1-createFile(name) this method creates a new file node of type cm:content with the specified name. The node is created as a child of the current node.
        Parameters

        name
        The name of the file to create
        Returns

        Returns the newly created node as the result of the function, or returns null if the creation failed. Alfresco puts the file MIME type of the content (there is no MIME type with the createNode method).

        Example

        var myfile = userhome.createFile("newfile.txt");
        
        2-createFile(name) this method creates a new file node of type cm:content with the specified name. The node is created as a child of the current node.
        Parameters

        name
        The name of the file to create
        type
        The type of file to create. If null will create ContentModel.TYPE_CONTENT.
        Returns

        Returns the newly created node as the result of the function, or returns null if the creation failed. Alfresco puts the file MIME type of the content (there is no MIME type with the createNode method).

        Example

        var myfile = userhome.createFile("newfile.txt", "cm:content"); */
    createFile(name:string):cmContent
    createFile(name:string, type:string):cmContent
    /** The createNode methods are used to create new nodes.
        Note: Any unsaved property changes will be lost when this method is called. To preserve property changes call save() [74] first.
        
        1-createNode(name,type)

        This method creates a new node of the specified type (a QName in either full or short form).

        Parameters

        name
        The node name. Name of the node to create (can be null for a node without a 'cm:name' property).
        type
        The node type. QName type (fully qualified or short form such as 'cm:content').
        Returns

        Newly created node, or null if failed to create.

        Example

        var node = myforum.createNode("My Discussion", "fm:forum");
        
        2-createNode(name, type, assocType)

        This method creates a new node of the specified type as a child of the current node with the given child association type.
        Parameters

        name
        The node name. Name of the node to create (can be null for a node without a 'cm:name' property).
        type
        The node type. QName type (fully qualified or short form such as 'cm:content').
        assocType
        The QName of the child association type (fully qualified or short form, for example, 'cm:contains')
        Example

        var node = myforum.createNode("My Discussion", "fm:forum", "fm:discussion");
        3-createNode(name, type, properties)

        This method creates a new node as a child of the current node with the specified properties.
        Parameters

        name
        The node name. Name of the node to create (can be null for a node without a 'cm:name' property).
        type
        The node type. QName type (fully qualified or short form such as 'cm:content').
        properties
        An associative array of the properties to be added to the node upon creation. This is useful when a type requires the setting of mandatory properties.
        Returns

        Newly created node, or null if failed to create.

        Example

        var node = companyhome.childByNamePath("Sites/test"); 
        var forumName = "My Forum";
        var properties = new Array();
        properties['cm:title'] = "The forum title";
        properties['cm:description'] = "The forum description";
        var forum = node.createNode(forumName, "fm:forum", properties);   
                
        4-createNode(name, type, properties, assocType)

        This method creates a new node as a child of the current node. The node contains the specified child association name with the specified properties with that child association type.
        Parameters

        name
        The node name. Name of the node to create (can be null for a node without a 'cm:name' property).
        type
        The node type. QName type (fully qualified or short form such as 'cm:content').
        properties
        An associative array of the properties to be added to the node upon creation.
        assocType
        The QName QName of the child association type (fully qualified or short form, for example, 'cm:contains').
                
        5-createNode(name, type, properties, assocType, assocName)

        This method creates a new node as a child of the current node. The node contains the specified child association name with the specified properties, and the given child association type and name.
        Parameters

        name
        The node name. Name of the node to create (can be null for a node without a 'cm:name' property).
        type
        The node type. QName type (fully qualified or short form such as 'cm:content').
        properties
        An associative array of the properties to be added to the node upon creation
        assocType
        The QName of the child association type (fully qualified or short form, for example, 'cm:contains').
        assocName
        The QName of the child association name (fully qualified or short form, for example, 'fm:discussion').*/
    createNode(name:string, type:string):cmContent
    createNode(name:string, type:string, assocType:string):cmContent
    createNode(name:string, type:string, properties:Object):cmContent
    createNode(name:string, type:string, properties:Object, assocType:string):cmContent
    createNode(name:string, type:string, properties:Object, assocType:string, assocName:string):cmContent
    /** The addNode(node) method adds an existing node as a child of this node.
        Note: Any unsaved property changes will be lost when this method is called. To preserve property changes call save() [74] first.

        Parameters

        node
        The node to add as a child of the current node.
        Returns

        void

        Example

        var dir = companyhome.createNode("SUB_FOLDER", "cm:folder");

        var properties = new Array();
        properties['cm:title'] = "Node title";
        properties['cm:description'] = "Node description";

        var node = companyhome.createNode("SUPER_FILE.TXT", "cm:content", properties);
        node.content = "Node content";

        // now add as child of sub folder

        dir.addNode(node);    
        model.node = node; */
    addNode(node:cmCmobject):void
    /** removeNode(node) removes all parent-child relationships between two nodes.
        The child node will be cascade deleted if one of the associations was the primary association, that is, the one with which the child node was created.

        Note: Any unsaved property changes will be lost when this method is called. To preserve property changes call save() [74] first.

        Parameters

        node
        The node to be removed.
        Example

        var dir = companyhome.childByNamePath("SUB_FOLDER");
        var node = companyhome.childByNamePath("SUPER_FILE.TXT");

        // delete child from parent

        dir.removeNode(node);*/
    removeNode(node:cmCmobject):void
    /** createAssociation(target, assocType) creates a new target association to the specified node with the given association type QName.
        Note: Any unsaved property changes will be lost when this method is called. To preserve property changes call save() [74] first.

        Parameters

        target
        Destination node for the association
        assocType
        Association type qname (short form or fully qualified)
        Returns
        The new association. */
    createAssociation(target:cmCmobject, assocType:string):Object // The new association. FIXME
    /** removeAssociation(target, assocType) removes the association to the specified node with the given association type QName.
        Note: Any unsaved property changes will be lost when this method is called. To preserve property changes call save() [74] first.

        Parameters

        target
        Destination node on the end of the association
        assocType
        Association type qname (short form or fully qualified)*/
    removeAssociation(target:cmCmobject, assocType:string):Object
    /** remove() this method deletes the node.
        Note: Any unsaved property changes will be lost when this method is called. To preserve property changes call save() [74] first.

        Returns

        Returns true on success, or false otherwise.

        Example

        Any variable or references to the ScriptNode should be discarded. For example:
        mynode.remove();*/
    remove():boolean
    /** The copy
        methods are used to copy nodes to specified destination nodes.
        Parent topic: Modifying and creating API [45]
        1-copy(destination)

        This method copies the node to the specified destination node.
        Parameters

        destination
        The destination node
        Returns

        Returns the newly copied ScriptNode instance on success, or null if the copy fails.

        Example

        var docCopy = document.copy(userhome);
        
        2-copy(destination, deepCopy)

        This method copies the node to the specified destination node. It copies all child nodes of the source if the deepCopy argument is true. Otherwise, it only copies the source node itself.
        Parameters

        destination
        The destination node
        deepCopy
        True for a deep copy, false otherwise.
        Returns

        Returns the newly copied ScriptNode instance on success, or null if the copy fails reason.

        Example

        var docCopy = document.copy(userhome, true); */
    copy(destination:cmCmobject):cmCmobject
    copy(destination:cmCmobject,deepCopy:boolean):cmCmobject
    /** Move

        move moves the node to the specified destination.
        Parent topic: Modifying and creating API [45]
        1-move(destination) this method moves the node to the new parent destination.
        Parameters

        destination
        The destination node.
        Returns

        Boolean

        Returns true on success, or false on failure to move

        2-move(source, destination) this method moves the specified source node to the new parent destination.
        Parameters

        source
        The source node.
        destination
        The destination node.
        Returns

        Boolean

        Returns true on success, or false on failure to move*/
    move(destination:cmCmobject):boolean
    move(source:cmCmobject,destination:cmCmobject):boolean
    /** addAspect

        The addAspect methods are used to add new aspects to nodes.
        Note: Any unsaved property changes will be lost when this method is called. To preserve property changes call save() [74] first.

        Parent topic: Modifying and creating API [45]
        
        1-addAspect(aspect)

        This method adds a new aspect and properties to the node allowing mandatory aspect properties to be supplied when the new aspect is applied.
        Parameters

        aspect
        The aspect to add
        Returns

        True if the aspect was added successfully, false otherwise.

        Example

        document.addAspect("cm:translatable");
        
        2-addAspect(aspect, properties)

        This method adds a new aspect and properties to the node allowing mandatory aspect properties to be supplied when the new aspect is applied.
        Parameters

        aspect
        The aspect to add
        properties
        An associative array of QName keyed properties. Any mandatory properties for the aspect must be provided.
        Returns

        True if the aspect was added successfully, false otherwise.

        Example

        var props = new Array(); 
        props["cm:template"] = myTemplateNode.nodeRef; 
        document.addAspect("cm:templatable", props);*/
    addAspect(aspect:string):boolean
    addAspect(aspect:string,properties:Object):boolean
    /** removeAspect(aspect) removes the specified aspect from the node.
        Note: Any unsaved property changes will be lost when this method is called. To preserve property changes call save() [74] first.

        Parameters

        aspect
        The aspect type to remove
        Returns

        True if aspect removed, false otherwise.*/
    removeAspect(aspect:string):boolean
    /**specializeType

        specializeType(type) specializes the type of a node.
        Resets the type of the node. Can be called in order specialise a node to a sub-type. This should be used with caution since calling it changes the type of the node and thus implies a different set of aspects, properties and associations. It is the responsibility of the caller to ensure that the node is in an approriate state after changing the type.

        Parameters

        type
        The type name supplied must be a subtype of the current type as defined in the Data Dictionary
        Returns

        Boolean. Returns true on success, false otherwise. */
    specializeType(type:string):boolean
    /** revert reverts node to the specified version.
        Parent topic: Modifying and creating API [45]
        revert(history, majorVersion, versionLabel)

        revert(history, majorVersion, versionLabel) this method reverts the node to the specified version.
        The node must have the cm:versionable aspect. The node will be checked out if required and will be checked in after the call. This method does not attempt to perform a deep revert of associations.

        Parameters

        history
        A revision history note.
        majorVersion
        If set to true the method will try to save the changes as a major version increment. If false will save as a minor version increment.
        versionLabel
        The version label to revert from.
        Returns

        ScriptNode

        Returns the original node that was checked out if reverted, or null if the specified version does not exist.

        revert(history, majorVersion, versionLabel, deep)

        revert(history, majorVersion, versionLabel, deep) revert this node to the specified version and potentially all child nodes.
        The node must have the aspect cm:versionable. The node will be checked out if required, and checked in on completion of the call.

        Parameters

        history
        A revision history note.
        majorVersion
        If set to true the method will try to save the changes as a major version increment. If false will save as a minor version increment.
        versionLabel
        The version label to revert from.
        deep
        If set to true the method will perform a deep revert. If set to false a deep revert will not be performed, and only the current node will be reverted.
        Returns

        ScriptNode

        Returns the original node that was checked out if reverted, or null if the specified version does not exist.*/
    revert(history:string, majorVersion:boolean, versionLabel:string)
    revert(history:string, majorVersion:boolean, versionLabel:string, deep:boolean)
    /** save() persists the modified properties of this node.
        Example

        var node = companyhome.createFile("TEST_FILE_1.TXT");

        node.properties.description = "This is an example description.";
        node.save(); // persist changes to database*/
    save():void 
}