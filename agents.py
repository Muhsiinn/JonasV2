from typing import Annotated, Literal, List
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langchain_ollama import ChatOllama
from pydantic import BaseModel, Field
from typing_extensions import TypedDict 

llm = ChatOllama(
    model="cas/discolm-mfto-german",
    temperature=0,
)

class data(BaseModel):
    student_level: List[str] = []