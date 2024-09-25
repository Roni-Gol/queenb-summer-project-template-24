import React from "react";
import styles from './suggestionsComponent.module.css';

const SuggestionsComponent = ({ setQuery ,suggestions, setSuggestions}) => {
   
    //when the user clicks on a suggestion the input will be updated
    const handleSuggestionsClick = (suggestion) => {
        setQuery(suggestion.name);
        // clear suggestions when a suggestion is clicked
        setSuggestions([]);    
    };

    return (
        <div>
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

export default SuggestionsComponent;




    