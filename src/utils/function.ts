export function removeSpacesKeepNewlines( text: string){
 return text.replace(/(\r?\n){2,}/g , '\n')
}