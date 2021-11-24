export const ADD_TO_LIKES = 'ADD_TO_LIKES'
export const DELETE_TO_LIKES = 'DELETE_TO_LIKES'

export const addToLikesAction = (likes) => ({
  type:ADD_TO_LIKES,
  payload: likes, 
})

export const deleteToLikesAction = (likes) => ({
type:DELETE_TO_LIKES ,
payload:likes,
})