import React, {useState} from "react";
import axios from "axios";
import styles from './autocompleteComponent.module.css';


const AutocompleteComponent = ({ setQuery ,onKeyDown}) => {
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
        } else if(value.length > 0) {
            try {
                const response = await axios.post('http://localhost:5000/api/content/search/suggestions', { query: value });
                console.log(typeof response.data);
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
                onKeyDown={onKeyDown}
            />
            {suggestions.length > 0 && (
                <ul className={styles.suggestionsList}>
                    {suggestions.map((suggestion) => (
                        // list of suggestions and handle click on the suggestion
                        <li key={suggestion._id} onClick={() => handleSuggestionsClick(suggestion)}>
                            {suggestion.name}
                        </li>
                    ))}
                </ul>
            )}      
        </div>
    );
};

export default AutocompleteComponent;




    