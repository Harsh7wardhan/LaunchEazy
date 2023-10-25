import React, { useState, useEffect } from 'react';
import classes from './MarketPlace.module.css';
import SearchIcon from '../../assets/search.png'
import SearchIconHover from '../../assets/search (1).png'
import Arrow from '../../assets/arrow_drop_down.png'
import TemplateCards from '../TemplateCards/TemplateCards';
import AnnImg1 from '../../assets/image 135.png'
import AnnImg2 from '../../assets/image 135 (1).png'
import AnnImg3 from '../../assets/image 135 (2).png'
import AnnImg4 from '../../assets/card33.png'
import NewDropDown from '../NewDropDown/NewDropDown';

function MarketPlace() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sortBy, setSortBy] = useState('Recent');

    const categories = ['Announcement', 'Educate & Inform', 'Invitation', 'Occasions', 'Business'];
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        handleSortByChange('Recent');
        // handleCategoryChange(categories)
    }, []);

    const sortOptions = ['Recent', 'Popular', 'A-Z'];

    const [categoriesNew, setCategoriesNew] = useState([
        {
            name: 'Announcement',
            cards: [
                { imgSrc: AnnImg1, text: 'Featured Service', new: false, popularity: 10 },
                { imgSrc: AnnImg2, text: 'Weekly Newsletter', new: false, popularity: 9 },
                { imgSrc: AnnImg3, text: 'New Product/Service Announcement', new: true, popularity: 6 }
            ]
        },
        {
            name: 'Educate & Inform',
            cards: [
                { imgSrc: AnnImg3, text: 'New Product/Service Announcement', new: true, popularity: 10 },
                { imgSrc: AnnImg2, text: 'Weekly Newsletter', new: false, popularity: 10 },
                { imgSrc: AnnImg4, text: 'Editorial Newletter', new: false, popularity: 2 },
                { imgSrc: AnnImg4, text: 'Editorial Newletter', new: false, popularity: 1 },
                { imgSrc: AnnImg1, text: 'Featured Service', new: false, popularity: 7 },
                { imgSrc: AnnImg3, text: 'New Product/Service Announcement', new: true, popularity: 8 }
            ]
        },
        {
            name: 'Invitation',
            cards: [
                { imgSrc: AnnImg1, text: 'Featured Service', new: false, popularity: 4 },
                { imgSrc: AnnImg2, text: 'Weekly Newsletter', new: false, popularity: 10 },
                { imgSrc: AnnImg3, text: 'Editorial Newletter', new: false, popularity: 2 }
            ]
        },
        {
            name: 'Occasions',
            cards: [
                { imgSrc: AnnImg1, text: 'Featured Service', new: false, popularity: 10 },
                { imgSrc: AnnImg2, text: 'Weekly Newsletter', new: false, popularity: 7 },
                { imgSrc: AnnImg3, text: 'New Product/Service Announcement', new: true, popularity: 5 }
            ]
        },
        {
            name: 'Business',
            cards: [
                { imgSrc: AnnImg1, text: 'Featured Service', new: false, popularity: 1 },
                { imgSrc: AnnImg2, text: 'Weekly Newsletter', new: false, popularity: 2 },
                { imgSrc: AnnImg3, text: 'New Product/Service Announcement', new: true, popularity: 8 }
            ]
        },
    ]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    // const categoriesNew = [

    // ];


    // const filteredTemplates = templates.filter((template) => {
    //     return (
    //         (selectedCategories.length === 0 || selectedCategories.includes(template.category)) &&
    //         (template.title.toLowerCase().includes(searchText.toLowerCase()))
    //     );
    // });
    const filteredTemplates = categoriesNew.reduce((filtered, category) => {
        if (
            selectedCategories.length === 0 ||
            selectedCategories.includes(category.name)
        ) {
            const filteredCards = category.cards.filter((card) => {
                return card.text.toLowerCase().includes(searchText.toLowerCase());
            });

            if (filteredCards.length > 0) {
                filtered.push({
                    name: category.name,
                    cards: filteredCards,
                });
            }
        }
        return filtered;
    }, []);


    const handleCategoryChange = (category) => {
        const updatedCategories = [...selectedCategories];
        if (updatedCategories.includes(category)) {
            updatedCategories.splice(updatedCategories.indexOf(category), 1);
        } else {
            updatedCategories.push(category);
        }
        setSelectedCategories(updatedCategories);
    };

    const handleSearchChange = (text) => {
        setSearchText(text);
    };

    const handleSortByChange = (value) => {
        setSortBy(value);
        const sortedCategories = [...categoriesNew];

        if (value === "Recent") {
            // Sort the data by the 'new' property when "Sort By Recent" is selected
            sortedCategories.forEach((category) => {
                category.cards.sort((a, b) => (b.new ? 1 : -1));
            });
        } else if (value === "Popular") {
            // Sort the data by popularity, from most popular to least popular
            sortedCategories.forEach((category) => {
                category.cards.sort((a, b) => b.popularity - a.popularity);
            });
        } else if (value === "A-Z") {  // Use "A-Z" instead of "AZ"
            // Sort the cards alphabetically within each category
            sortedCategories.forEach((category) => {
                category.cards.sort((a, b) => a.text.localeCompare(b.text));
            });
        }

        setCategoriesNew(sortedCategories);
    };





    return (
        <section className={classes.Section}>
            <div className={classes.ParentContainer}>
                <div className={classes.Left}>
                    <p>Categories</p>
                    {categories.map((category) => (
                        <label className={classes.CategorLabel} key={category}>
                            <input
                                type="checkbox"
                                value={category}
                                checked={selectedCategories.includes(category)}
                                onChange={(e) => handleCategoryChange(e.target.value)}
                                className={classes.CheckBox}
                            />
                            <p className={classes.CategorLabelText}>{category}</p>
                        </label>
                    ))}
                </div>
                <div className={classes.Right}>
                    <div className={classes.FiltersContainer}>

                        <div className={classes.Search}>
                            <div className={classes.SearchIcons}>
                                <img className={classes.SearchIcon} src={SearchIcon} alt="Default Search Icon" />
                                <img className={classes.SearchIconHover} src={SearchIconHover} alt="Hover Search Icon" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search email templates"
                                value={searchText}
                                className={classes.SearchBar}
                                onChange={(e) => handleSearchChange(e.target.value)}
                            />
                        </div>


                        <div className={classes.SortByContainer}>
                            <p className={classes.SortText}>Sort By</p>
                            {/* <select className={classes.SortBySelect} value={sortBy} onChange={(e) => handleSortByChange(e.target.value)}>
                                <option className={classes.OptionText} value="Recent">Recent</option>
                                <option className={classes.OptionText} value="Popular">Popular</option>
                                <option className={classes.OptionText} value="AZ">A-Z</option>
                            </select> */}
                            <NewDropDown
                                options={sortOptions}
                                defaultOption={sortBy}
                                onSelect={handleSortByChange}
                            />
                        </div>

                        <div className={classes.SortByContainer2}>
                            <p className={classes.SortText}>Filter By</p>
                            <div className={classes.CustomDropdown}>
                                <div className={classes.DropdownHeader} onClick={() => toggleDropdown()}>
                                    <p className={classes.DDtext} >{selectedCategories.length === 0 ? "All Categories" : `${selectedCategories.length} selected`}</p>
                                    <img className={classes.DropdownArrow} src={Arrow} alt="Dropdown Arrow" />
                                </div>
                                {isDropdownOpen && (
                                    <div className={classes.DropdownContent}>
                                        <select
                                            multiple
                                            value={selectedCategories}
                                            onChange={(e) => handleCategoryChange(e.target.value)}
                                            className={classes.SortBySelect1}
                                        >
                                            {categories.map((category) => (
                                                <option className={classes.OptionText} value={category} key={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* <div className={classes.SortByContainer2}>
                            <p className={classes.SortText}>Filter By</p>
                            <select className={classes.SortBySelect} value={selectedCategories} onChange={(e) => handleCategoryChange(e.target.value)}>
                                <option className={classes.OptionText} value="">All Categories</option>
                                {categories.map((category) => (
                                    <option className={classes.OptionText} value={category} key={category}>{category}</option>
                                ))}
                            </select>
                        </div> */}
                    </div>

                    <div className={classes.TemplateList}>
                        {filteredTemplates.map((category, index) => (
                            <TemplateCards
                                key={index}
                                categoryName={category.name}
                                cards={category.cards}
                            />
                        ))}
                    </div>
                </div>

            </div>

        </section>
    );
}

export default MarketPlace;
