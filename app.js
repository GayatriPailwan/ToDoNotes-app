const addbtn=document.querySelector("#addbtn");
const main =document.querySelector("#main");
addbtn.addEventListener(
    "click",
      function(){
        addnote() 
      }
)


const savenotes=()=>{
    const notes= document.querySelectorAll(".note textarea");
    console.log(notes);
    const data=[];
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )
   if(data.length===0){
    localStorage.removeItem("notes")
   }
   else{
    localStorage.setItem("notes",JSON.stringify(data))
    
   }
    
}


const addnote = (text= "") => {
    const note=document.createElement("div");
        note.classList.add("note")
        note.innerHTML =`
        <div class="tool">
        </i><i class="save bi bi-save-fill"></i>
        <i class="trash bi bi-trash"></i>

    </div>
    <textarea >${text}</textarea>
        `;

        note.querySelector(".trash").addEventListener(
            "click" ,
            function(){
                note.remove();
                savenotes();
            }
        )
        note.querySelector(".save").addEventListener(
            "click" ,
            function(){
                savenotes()
            }
        )
        note.querySelector("textarea").addEventListener(
            "focusout",
            function() {
                savenotes()
            }
        )
        main.appendChild(note);
        savenotes();

}
(
    function(){
        const lsnotes=JSON.parse(localStorage.getItem("notes"));
        if(lsnotes===null){
            addnote()
        }else{
        lsnotes.forEach(
            (lsnotes) => {
                addnote(lsnotes)
            }
        )
    }
}
)()

