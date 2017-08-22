import { connect } from 'react-redux';
import NotesList from '../components/NotesList.jsx';
import { Share } from '../actions/index.js';


const mapStateToProps = state => ({
  notes: state.notes,
});

const mapDispatchToProps = dispatch => ({
  shareTwitter: (id) => {
    console.log('Here', id);
    dispatch(Share(id));
  },
});

const AllnoteList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesList);

export default AllnoteList;
