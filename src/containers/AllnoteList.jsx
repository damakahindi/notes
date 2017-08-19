import { connect } from 'react-redux';
import NotesList from '../components/NotesList.jsx';

const mapStateToProps = state => ({
  notes: state.notes,
});


const AllnoteList = connect(
  mapStateToProps,
  null,
)(NotesList);

export default AllnoteList;
