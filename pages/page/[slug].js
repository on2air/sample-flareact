import React from 'react'
import { Collection, CollectionRow, Modal, NotionRenderer } from 'react-notion-x'
import { NotionAPI} from '../../lib/client'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'rc-dropdown/assets/index.css'


export async function getEdgeProps( {params}) {
    const {slug} = params;
    const client = new NotionAPI()
    console.log('Edge Slug', slug)
    const map = await client.getPage(slug )
    return {
        props: {
            map
        },
    };
}

export default function Slug({map}) {

    console.log('Notion RECORD MAP', map)
  return (
      <>
          <NotionRenderer
              mapPageUrl={ id => `/page/${id}`}
              recordMap={map}
              fullPage={false}
              darkMode={false}
              // searchNotion={ async( term, rootId) => {
              //     console.log('Searching Term: ' + term)
              //     return []
              // }}
              components={{
                  collection: Collection,
                  collectionRow: CollectionRow,
                  modal: Modal
              }}
          />
      </>
  );
}
