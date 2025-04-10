function enableCommentButton(){
    const commentInput = document.getElementById("comment_text_area");
    const commentArrowIcon=document.getElementById("comment_send_arrow_icon");
    if (!isInputEmpty(commentInput)) {
        commentArrowIcon.src="media_used/CommunityFeed/ReactModal/ButtonIcons/comment_arrow_icon_ON.png";
    }else{
        commentArrowIcon.src="media_used/CommunityFeed/ReactModal/ButtonIcons/comment_arrow_icon_OFF.png";
    }   
}

function enableEditorSubmitButton(){
    const submitButton=document.getElementById("WriteModalFooter_button_submit");
    const editorText=document.getElementById("Editor_box");
    if(!isInputEmpty(editorText)){
        submitButton.classList.remove("editor_submit_disabled");
        submitButton.classList.add("editor_submit_enabled");
    }else {
        submitButton.classList.remove("editor_submit_enabled");
        submitButton.classList.add("editor_submit_disabled");
    }
}

function enableJoinSubmitButton(){
    const submitButton=document.getElementById("join_submit_button");
    const usernameText=document.getElementById("join_username_input");
    if(!isInputEmpty(usernameText)){
        submitButton.classList.remove("join_submit_disabled");
        submitButton.classList.add("join_submit_enabled");
    }else{
        submitButton.classList.remove("join_submit_enabled");
        submitButton.classList.add("join_submit_disabled");
    }
}

function likeButtonTrue(button){
    button.src = "media_used/CommunityFeed/CommonIcons/weverse_like_icon_on(remastered).jpg";
}

function likeButtonFalse(button){
    if(button===undefined){
        const iconList=document.querySelectorAll(".LikeButton_icon ");
        for(let icon of iconList){
            icon.src="media_used/CommunityFeed/CommonIcons/weverse_like_icon_off.jpg";
        }
    }
    else{
        button.src = "media_used/CommunityFeed/CommonIcons/weverse_like_icon_off.jpg";
    }
}


document.getElementById("comment_text_area").addEventListener("input", enableCommentButton);

document.getElementById("Editor_box").addEventListener("input",enableEditorSubmitButton);

document.getElementById("join_username_input").addEventListener("input",enableJoinSubmitButton);

enableEditorSubmitButton();
enableCommentButton();
enableJoinSubmitButton();
likeButtonFalse();

