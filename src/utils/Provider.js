import { createContext, useReducer, useContext, } from 'react'

export const ContextData = createContext();

const initialState = {
  user: null,
  hamburger: false,
  searchClick:false,
  playlists: null,
  token: "",
  searchTrack:null,
  currently_playing_track:null,
  discover_weekly: null,
  featured_playlists: null,
  new_releases: null,
  top_artists: null,
  playing: false,
  item: null,
  tracks: null,
}

const reducers = (state, action) => {

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

      case "SET_Search_click":
      return {
        ...state,
        searchClick: action.searchClick,
      };
     
      case "SET_Search_Tracks":
        return {
          ...state,
          searchTrack: action.searchTrack,
        };

        case "SET_Currently_Tracks":
          return {
            ...state,
            currently_playing_track: action.currently_playing_track,
          };
        
      case "SET_TIME":
      return {
        ...state,
        musicCurrentTime: action.musicCurrentTime,
      };

    case "SET_TRACKS":
      return {
        ...state,
        tracks: action.tracks,
      };
    case "SET_NEW_RELEASES":
      return {
        ...state,
        new_releases: action.new_releases,
      };

    case "SET_HAMBURGER":
      return {
        ...state,
        hamburger: action.hamburger,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_FEATURED_PLAYLIST":
      return {
        ...state,
        featured_playlists: action.featured_playlists,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }

};

export const useStateValues = () => useContext(ContextData);

export function NewContextProvider({ children }) {

  return (<ContextData.Provider value={useReducer(reducers, { initialState })} >
    {children}
  </ContextData.Provider>
  )
}

