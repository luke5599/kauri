use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Serialize, Deserialize)]
#[serde(tag = "type")]
pub enum Node {
    Text(Text),
    Element(Element),
}

#[derive(Serialize, Deserialize)]
pub struct Text {
    content: String,
	pub styles: HashMap<String, String>, // Temporary, just as a stepping stone during refactoring
}

impl Text {
    /// Constructs a new text node.
    ///
    ///  - `content`: Internal text content.
    pub fn new(content: String) -> Text {
        Text { content, styles: HashMap::new() }
    }
}

#[derive(Serialize, Deserialize)]
pub struct Element {
    tag: String,
    pub attributes: HashMap<String, String>,
    pub styles: HashMap<String, String>,
    pub children: Vec<Node>,
}

impl Element {
    /// Constructs a new element
    ///
    /// - `tag`: Tag name.
    pub fn new(tag: String) -> Element {
        Element {
            tag,
            attributes: HashMap::new(),
            styles: HashMap::new(),
            children: Vec::new(),
        }
    }
}
