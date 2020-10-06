import { ActionsOptions } from './options/actions-options';
import { ActionListenerCommand } from './interfaces/action-listener.command';
import { DocumentFile } from './file/document-file';

import { CloseAction } from './actions/close.action';
import { OpenAction } from './actions/open.action';
import { SaveAction } from './actions/save.action';

const document = new DocumentFile();  
const close: ActionListenerCommand = new CloseAction(document);
const open: ActionListenerCommand = new OpenAction(document);
const save: ActionListenerCommand = new SaveAction(document);
    
const options = new ActionsOptions(close, open, save);
options.open();
options.save();
options.close();