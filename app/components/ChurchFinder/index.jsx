import $ from 'jquery';
import React, { Component } from 'react';

class ChurchFinder extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            rows: null
        };
    }

    componentDidMount() {
        setTimeout(() => {
            $.ajax({
                context: this,
                url: '/api/global/getchurchdirectory',
                contentType: 'application/json',
                success(response) {
                    console.log(JSON.parse(response.body).feed.entry);
                    try {
                        this.setState({ rows: JSON.parse(response.body).feed.entry });
                    } catch(err) {
                        console.log('ERROR!');
                    }
                }
            })
        }, 500);
    }

    renderLoading() {
        if (this.state.rows) { return null; }

        return <h2>Loading data...</h2>;
    }

    render() {
        return (
            <div className="church-finder">
                {this.renderLoading()}

                <div>CHURCH FINDER</div>
            </div>
        );
    }
}

export default ChurchFinder;

// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import css from 'classnames';
// import { partial } from 'lodash';
// import Checkbox from 'material-ui/Checkbox';
// import KeyboardArrowLeftIcon from 'material-ui-icons/KeyboardArrowLeft';

// import { ROUTES } from 'app/constants/routes';
// import { DIRECTORY_1689 } from 'app/constants/directory-1689';
// import ChurchDirectoryMap from 'app/components/ChurchFinder/map';
// import ChurchDirectoryList from 'app/components/ChurchFinder/list';

// class ChurchFinder extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             allChurches: true,
//             confessional: true,
//             familyIntegrated: true,
//             listView: false,
//             showFilters: true
//         };

//         this.onFilter = this.onFilter.bind(this);
//         this.onListView = this.onListView.bind(this);
//         this.toggleFilters = this.toggleFilters.bind(this);
//     }

//     componentWillMount() {
//         if (typeof window !== 'undefined') {
//             const pathname = window.location.pathname;

//             if (pathname === '/reformed-church-finder/list') {
//                 this.setState({ listView: true });
//                 document.body.style.background = '#455A64';
//             }
//         }
//     }

//     onFilter(filter) {
//         this.setState({ [filter]: !this.state[filter] });
//     }

//     toggleFilters() {
//         this.setState({ showFilters: !this.state.showFilters });
//     }

//     onListView() {
//         const newValue = !this.state.listView;

//         this.setState({ listView: newValue });

//         const newRoute = newValue ? '/reformed-church-finder/list' : '/reformed-church-finder';

//         this.props.history.push(newRoute);
//     }

//     getFilteredChurches() {
//         const { allChurches, confessional, familyIntegrated } = this.state;

//         return DIRECTORY_1689.filter(church => {
//             if (allChurches) {
//                 return true;
//             }

//             if (confessional && church.confession.indexOf('1689') !== -1) {
//                 return true;
//             }

//             if (familyIntegrated && church.familyIntegrated) {
//                 return true;
//             }

//             return false;
//         });
//     }

//     renderFilters() {
//         const { allChurches, confessional, familyIntegrated, listView, showFilters } = this.state;

//         const classNames = css('church-directory__filters', {
//             'church-directory__filters--hide': !showFilters
//         });

//         const filteredChurches = this.getFilteredChurches();

//         return (
//             <div className={classNames}>
//                 <div className="church-directory__filters-title" onClick={this.toggleFilters}>
//                     <strong>Filters/Actions</strong>
//                     <KeyboardArrowLeftIcon />
//                 </div>
//                 {
//                     showFilters
//                         ? (
//                             <div>
//                                 <Checkbox
//                                     label="All churches"
//                                     onCheck={partial(this.onFilter, 'allChurches')}
//                                     checked={allChurches}
//                                 />
//                                 <Checkbox
//                                     label="1689 confessional"
//                                     onCheck={partial(this.onFilter, 'confessional')}
//                                     checked={confessional}
//                                 />
//                                 <Checkbox
//                                     label="Family-integrated"
//                                     onCheck={partial(this.onFilter, 'familyIntegrated')}
//                                     checked={familyIntegrated}
//                                 />
//                                 <strong>{filteredChurches.length}</strong> churches
//                                 <br /><br />
//                                 <Checkbox
//                                     label={`${listView ? 'Hide' : 'Show'} list view`}
//                                     onCheck={this.onListView}
//                                 />
//                             </div>
//                         )
//                         : null
//                 }
//             </div>
//         );
//     }
    
//     render() {
//         const classNames = css('church-directory', {
//             'church-directory--list': this.state.listView
//         });

//         const filteredChurches = this.getFilteredChurches();

//         return (
//             <div className={classNames}>
//                 {
//                     this.state.listView
//                         ? <ChurchDirectoryList filteredChurches={filteredChurches} />
//                         : <ChurchDirectoryMap filteredChurches={filteredChurches} />
//                 }
//                 {this.renderFilters()}
//             </div>
//         );
//     }
// }

// export default withRouter(ChurchFinder);
