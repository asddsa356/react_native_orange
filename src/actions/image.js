import { TfImageRecognition } from 'react-native-tensorflow';
import {
  RESOGNIZE_IMAGE_START,
  RESOGNIZE_IMAGE_SUCCESS,
  RESOGNIZE_IMAGE_FAILED,
} from '../constants/image-consts';

// eslint-disable-next-line import/prefer-default-export
export function recognizeImage(data, navigation) {
  return async (dispatch) => {
    dispatch({ type: RESOGNIZE_IMAGE_START });
    try {
      const text = 'tensorflow_labels.txt';
      const graph = 'tensorflow_inception_graph.pb';
      const tfImageRecognition = new TfImageRecognition({
        model: graph,
        labels: text,
      });
      const result = await tfImageRecognition.recognize({
        image: data.uri,
      });
      await tfImageRecognition.close();
      navigation.navigate('Result', {
        image: data.uri,
        result: result[0].name,
      });
      dispatch({ type: RESOGNIZE_IMAGE_SUCCESS });
    } catch (err) {
      dispatch({ type: RESOGNIZE_IMAGE_FAILED });
      alert(err);
    }
  };
}
