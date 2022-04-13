import CreateNote from './create-note';
import Home from './home';
import MyNotes from './mynotes';
import NoteEditor from './note-editor';
import Dev from './dev';
import Loading from './loading';
import TriggerLoading from './trigger-loading';
import Settings from './settings';

export const screenkeys = [
    'home',
    'mynotes',
    'note-editor',
    'create-note',
    'dev',
    'loading',
    'trigger-loading',
    'settings'
];

export const screencomponents = [
    Home,
    MyNotes,
    NoteEditor,
    CreateNote,
    Dev,
    Loading,
    TriggerLoading,
    Settings
];

export default screenkeys.map((skey, i) => {
    const screen = {
        key: skey,
        component: screencomponents[i]
    };
    return screen;
})