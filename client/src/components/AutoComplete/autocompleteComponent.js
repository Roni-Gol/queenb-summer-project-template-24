import React, {useState} from "react";
import axios from "axios";
import styles from './autocompleteComponent.module.css';


const AutocompleteComponent = ({ setQuery }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    //const [loading, setLoading] = useState(false);

    const handleSuggestions = async (e) => {
        const value = e.target.value
        setInputValue(value);
        setQuery(value);

        if (value.length === 0) {
            // reset suggestions when query is empty
            setSuggestions([]);
        } else if(value.length > 2) {
            try {
                const response = await axios.post('http://localhost:5000/api/content/search/suggestions', { query: value });
                setSuggestions(response.data);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            };
        }
    };

    const handleSuggestionsClick = (suggestion) => {
        setQuery(suggestion.name);
        setInputValue(suggestion.name);
        // clear suggestions when a suggestion is clicked
        setSuggestions([]);
            
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for content..."
                onChange={handleSuggestions}
                value={inputValue}
            />
            {suggestions.length > 0 && (
                <ul className={styles.suggestionsList}>
                    {suggestions.map((suggestion) => (
                        // list of suggestions and handle click on the suggestion
                        <li key={suggestion._id} onClick={() => handleSuggestionsClick(suggestion)}/*onClick={() => setQuery(suggestion.name)}*/>
                            {suggestion.name}
                        </li>
                    ))}
                </ul>
            )}      
        </div>
    );
};

export default AutocompleteComponent;




    