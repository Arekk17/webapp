import { makeStyles, Theme } from '@material-ui/core/styles'
import { typography, colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    maxWidth: 1072
  },
  subheader: {
    ...typography.heading4,
    color: colors.white.main,
    marginBottom: 16
  },
  plotsRow: {
    marginBottom: 24,
    flexDirection: 'row',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  row: {
    marginBottom: 16
  },
  loading: {
    width: 300,
    height: 300,
    marginInline: 'auto'
  },
  plot: {
    width: 524,

    '&:first-child': {
      marginRight: 24
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',

      '&:first-child': {
        marginRight: 0,
        marginBottom: 24
      }
    }
  }
}))

export default useStyles
