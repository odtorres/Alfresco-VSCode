//Search API
declare let search: Search_API;

declare enum ReferenceType { "node", "path" }



interface NodeRef {

}

interface Workflow {

}

interface searchObject {
    query: string,          //mandatory, in appropriate format and encoded for the given language
    store: string,          //optional, defaults to 'workspace://SpacesStore'
    language: string,       //optional, one of: lucene, xpath, jcr-xpath, fts-alfresco - defaults to 'lucene'
    templates: {            //optional, Array of query language template objects (see below) - if supported by the language 
        field: string,          //mandatory, custom field name for the template
        template: string        //mandatory, query template replacement for the template
    },
    sort: {                 //optional, Array of sort column objects (see below) - if supported by the language
        column: string,         //mandatory, sort column in appropriate format for the language
        ascending: boolean      //optional, defaults to false
    },
    page: {                 //optional, paging information object (see below) - if supported by the language 
        maxItems: number,       // optional, max number of items to return in result set
        skipCount: number       // optional, number of items to skip over before returning results
    },
    namespace: string,      //optional, the default namespace for properties
    defaultField: string,   //optional, the default field for query elements when not explicit in the query
    onerror: string         //optional, result on error - one of: exception, no-results - defaults to 'exception'
}

interface Search_API {
    /**
     * Find a alfresco Node
     * Param {NodeRef} NodeRef reference of the node to find.
     * Example

        var foundNode = search.findNode(nodeRef);
        
        ...
        
        var foundNode = null;    
        if (nodeRef.isNodeRef(nodeRefString)){

            foundNode = search.findNode(nodeRefString);
            ...
        }
        
        ...
        
        var referenceType = "node"; 
        // Store type, store id, node id
        var reference = ["workspace", "SpacesStore", "78eb920f-fd46-41ee-9fdb-099e96da8349"];
        var foundNode = search.findNode(referenceType, reference);

        var referenceType = "path";
        // store type, store id, display path 
        var reference = ["workspace", "SpacesStore", "Company Home/dir1/dir2","TEST_FILE_1.TXT"];
        var foundNode = search.findNode(referenceType, reference);   
     * */
    findNode(nodeRef: NodeRef): ScriptNode
    
    findNode(nodeRefString: string): ScriptNode
    
    findNode(referenceType: ReferenceType, reference: Array<string>): ScriptNode

    /**
     * ISO9075Encode(string value) is a helper to encode a value into ISO9075-encoded format for Lucene PATH statements.
     * @param {rawString} The string to encode. Characters within the string that need to be encoded to ISO9075 will take the format _xDDDD_, where DDDD is the hex value of the character.
     * Example
        var rawString = "//test:123 DIR/FILE.TXT @";    
        var encodedString = search.ISO9075Encode(rawString);
        var decodedString = search.ISO9075Decode(encodedString); 
     */
    ISO9075Encode(rawString: string): string

    /**
     * ISO9075Decode(string value) is a helper to decode a ISO9075-encoded string for Lucene PATH statements.
     * @param {encodedString} The string to decode.
     * Example
        var rawString = "//test:123 DIR/FILE.TXT @";    
        var encodedString = search.ISO9075Encode(rawString);
        var decodedString = search.ISO9075Decode(encodedString); 
     */
    ISO9075Decode(encodedString: string): string
    /**
     * isValidXpathQuery(query) checks the validity of an XPath query string.
        @param {query}  The XPath query string to check.
        
        Returns true is the query is a valid XPath query string, false otherwise.

        Example

        The method can be used to check the validity of a XPath query prior to use:

        if (search.isValidXpathQuery(query)){
            nodes = search.xpathSearch(query);
        }
        else {
        // ...
        }
     */
    isValidXpathQuery(query: string): boolean
    
    /**
     * The luceneSearch methods provide search operations using the Lucene search syntax.
        luceneSearch(search)

        luceneSearch(search) this method performs a full-text search.
         @param {search} The search terms and operators that represent the Lucene search phrase.        

        Returns an array of ScriptNode objects that were found by the Alfresco repository Lucene search.

        Example

        var nodes = search.luceneSearch("TEXT:alfresco");
        ...
        var nodes = search.luceneSearch("workspace://SpacesStore", "TEXT:foo");
        ...
        var nodes = search.luceneSearch("TEXT:alfresco", "@cm:modified", false);
        ...
        var nodes = search.luceneSearch("workspace://SpacesStore", "TEXT:alfresco", "@cm:modified", true);
        ...
        var nodes = search.luceneSearch("TEXT:alfresco", "@cm:modified", true, 50);
        ...
        var nodes = search.luceneSearch("workspace://SpacesStore", "TEXT:alfresco", "@cm:modified", true, 50);
     */
    luceneSearch(search: string): Array<cmCmobject>

    luceneSearch(store: string, search: string): Array<cmCmobject>

    luceneSearch(search: string, sortColumn: string, asc: boolean): Array<cmCmobject>

    luceneSearch(store: string, search: string, sortColumn: string, asc: boolean): Array<cmCmobject>

    luceneSearch(search: string, sortColumn: string, asc: boolean, max: number): Array<cmCmobject>

    luceneSearch(store: string, search: string, sortColumn: string, asc: boolean, max: number): Array<cmCmobject>
    /**
     * query(search) performs a search on ScriptNode objects.
        Parameters

        search
        The search object. The search object is defined as follows:

        search
        {
            query: string,          mandatory, in appropriate format and encoded for the given language
            store: string,          optional, defaults to 'workspace://SpacesStore'
            language: string,       optional, one of: lucene, xpath, jcr-xpath, fts-alfresco - defaults to 'lucene'
            templates: [],          optional, Array of query language template objects (see below) - if supported by the language 
            sort: [],               optional, Array of sort column objects (see below) - if supported by the language
            page: object,           optional, paging information object (see below) - if supported by the language
            namespace: string,      optional, the default namespace for properties
            defaultField: string,   optional, the default field for query elements when not explicit in the query
            onerror: string         optional, result on error - one of: exception, no-results - defaults to 'exception'
        }

        sort
        {
            column: string,         mandatory, sort column in appropriate format for the language
            ascending: boolean      optional, defaults to false
        }

        page
        {
            maxItems: int,          optional, max number of items to return in result set
            skipCount: int          optional, number of items to skip over before returning results
        }

        template
        {
            field: string,          mandatory, custom field name for the template
            template: string        mandatory, query template replacement for the template
        }

                    
        Returns

        Returns an array of ScriptNode objects representing the search results.

        Example

        The search object defines the search to be executed as is constructed in this way:

        The search definition object can be as simple to use as:

        var results = search.query({query: "TEXT:alfresco"});

        Or as richly defined as:

        var sort1 = 
        { 
        column: "@{http://www.alfresco.org/model/content/1.0}modified", 
        ascending: false 
        }; 

        var sort2 = 
        { 
        column: "@{http://www.alfresco.org/model/content/1.0}created", 
        ascending: false
        }; 

        var paging = 
        { 
        maxItems: 100, 
        skipCount: 0 
        }; 

        var def = 
        { 
        query: "cm:name:test*", 
        store: "workspace://SpacesStore", 
        language: "fts-alfresco", 
        sort: [sort1, sort2], 
        page: paging 
        }; 

        var results = search.query(def); 
        This interface supports multi-column sorting and any of the Alfresco search languages. Future versions of the API will allow the search definition objects to be extended with additional properties while maintaining backward compatibility.
     */
    query(searchobject: searchObject): Array<ScriptNode>
    
    /**savedSearch(node) returns an array of ScriptNode objects that were found by executing the Saved Search referenced by the supplied node object. The node object contains the XML that represents the saved search.
    Parameters

    node
    The node object representing the saved search node.
    Returns

    Array of ScriptNode objects

    Example

        var node = companyhome.childByNamePath("Data Dictionary/Saved Searches/SilverSearch");
        if (node){        
            var nodes = search.savedSearch(node);
            model.nodes = nodes;
            model.message = "Nodes found from saved search:";
        }
        else{
            model.message = "Saved search not found";
        }
        
        ...
         
         var node = companyhome.childByNamePath("Data Dictionary/Saved Searches/GoldSearch");
        if (node){
            
            var nodeRef = node.nodeRef;
            var nodeRefString = nodeRef.toString();

            if (nodeRef.isNodeRef(nodeRefString)){
                var nodes = search.savedSearch(nodeRefString);
                model.nodes = nodes;
                model.message = "Nodes found from saved search:";
            }
            else{
                model.message = "nodeRefString not valid!";
            }
        }
        else{
            model.message = "Saved search not found";
        }

     */ 
    savedSearch(node: ScriptNode): Array<ScriptNode>

    savedSearch(node: string): Array<ScriptNode>
    /**The selectNodes methods perform an XPath search and return a list of found nodes.
        This method uses the underlying Node Service to perform a search. While this method provides full support for XPath syntax by using Jaxen, use of the Node Service means that searches might be less performant, especially for queries such as unconstrained full-text searches. For searches of such a nature it might be better to use xpathSearch(), which provides index-based searching at the cost of a more limited XPath syntax.

        CAUTION:
        The following operators should be avoided or used with caution as they can potentially consume considerable resources:

        selectNodes with //
        selectNodes with /*
        selectNodes with like
        In general, avoid using selectNodes() unless you are looking for a specific path.

        It is generally preferable to use a query language that searches against an index. This avoids potential excessive consumption of resources.

        Comparison between searching with the Node Service and using index-based searching, plus further information on supported syntax can be found in the developer Wiki
        selectNodes(search)
        This method performs an XPath search on the default store, workspace://SpacesStore.

        Parameters

        search
        The search string.

        Returns

        Returns an array of ScriptNode objects representing the search results.
        
        Example

        var searchString = "//*"; // XPath search string
        var store = "workspace://SpacesStore";

        var nodes = search.selectNodes(store, searchString);
                
        The following JavaScript snippet shows a typical search query:

        // call in JS
        model.nodes = search.selectNodes("/app:company_home/app:dictionary/*[like(@cm:name,'*templates')]")
         */
    selectNodes(search: string): Array<ScriptNode>

    selectNodes(store: string, search: string): Array<ScriptNode>
    /** tagSearch(store, tag) performs a search on a given tag in a given store.
        The default store (SpacesStore) is used if null value is supplied.

        Parameters

        store
        The store in which to search. The default is workspace://SpacesStore if null is provided for this parameter.
        tag
        The tag to search for. Any node with this tag will be returned as part of an array of nodes.
        Returns

        Returns an array of ScriptNode objects that represent the nodes within the store that have the given tag applied.

        Examples

        var store = "workspace://SpacesStore";
        var tag = "mining";
        var nodes = search.tagSearch(store, tag);
            
        Returns nodes that have the tag "mining" applied to them. */
    tagSearch(store: string, tag: string): Array<ScriptNode>
    /**xpathSearch(xpath) performs an XPath search.
        This method executes a search using a Lucene-based indexed query. The support for XPath is restricted but optimized. Being index-based, this method can offer better performance than Node Service based methods such as selectNodes(), for searches such as unconstrained full-text searches across large numbers of nodes.

        Comparison between searching with the Node Service and using index-based searching, plus further information on supported syntax can be found in the developer Wiki [162].

        Parameters

        xpath
        The XPath search string
        Returns

        Returns an array of ScriptNode objects that were found by the Alfresco repository XPath search.

        Example

        var query = "//";
        var nodes = search.xpathSearch(query);
        ...
        var query = "//";
        var store = "archive://SpacesStore"; 
        var nodes = search.xpathSearch(store, query);
        */
    xpathSearch(query: string): Array<ScriptNode>

    xpathSearch(store: string, query: string): Array<ScriptNode>
}
