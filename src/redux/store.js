import { createStore, applyMiddleware } from "redux";

// it is used for session storage and localstorage
import { persistStore } from "redux-persist";

// logger is used to when debugging our redux code
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// export default { store, persistor };
