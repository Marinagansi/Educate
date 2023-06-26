import React, { useState } from 'react';
import EmptyList from  '../../Component/Careers/common/EmptyList';
import BlogList from '../../Component/Careers/Blog/BlogList';
import Header from '../../Component/Careers/Blog/Header';
import SearchBar from '../../Component/Careers/Blog/SearchBar';
import { blogList } from '../../Component/Careers/config/data';
import Navbar from "../../Component/Navbarmenu/Navbar";
import "./styles.css";


import Helmet from "../../Component/Helmet";

import { Container, Row, Col } from "reactstrap";
import ExploreSection from "../../Component/commonsection/exploresection";
import HeroSection from "../../Component/Hero-section/HeroSection";
import CareerPage from "../../Component/career/Career";

const CHome = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Navbar/>
      <Helmet title="Signup">
          <section className="p-0">
            <ExploreSection title="career" />
          </section>
          <Container>
          <Row>
        
           < Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
          </Row>
        </Container>
        
        </Helmet>
           

      {/* Search Bar */}
     
    </div>
  );
};

export default CHome;
