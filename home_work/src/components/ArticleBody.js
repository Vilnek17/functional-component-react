
import App from "../App";
import LangContext from "./LangContext";
import React, {useContext} from "react";

function ArticleBody(props) {
  const context = useContext(LangContext);
return (
        <div className={`article__body ${props.isRead ? "read" : ""}`}>
          <h3 className="article__description">
            {!props.show && context.description }
          </h3>
          <p className="article__text">
            {props.show ? context.content : context.preview }
          </p>
        </div>)}
export default ArticleBody;