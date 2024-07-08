{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>

</div> */}

const parent = React.createElement("div",
    {
        id:"parent"
    },
    [
        React.createElement("div",{id:"child"},
            [React.createElement("h1", {},"hi this is nested react msg"),
            React.createElement("h2", {},"hi this is nested 2nd react msg")
        ])
    ],
    [ React.createElement("div",{id:"child"},
        [React.createElement("h1", {},"hi this is nested react msg"),
        React.createElement("h2", {},"hi this is nested 2nd react msg")
    ])]
    
   
)





const heading = React.createElement("h1",
    {id:"heading", xyd:"abcd"},
    "hi this react in html file");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);